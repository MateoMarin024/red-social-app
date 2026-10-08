const express = require('express');
const router = express.Router();
const db = require('../db.cjs');
const bcrypt = require('bcryptjs');

// Ruta de Registro
router.post('/register', async (req, res) => {
    const { nombre, email, password } = req.body;
    
    if (!nombre || !email || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const query = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
        db.query(query, [nombre, email, hashedPassword], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
                }
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ mensaje: 'Usuario registrado exitosamente 🚀', userId: result.insertId });
        });
    } catch (error) {
        res.status(500).json({ error: 'Error del servidor al registrar' });
    }
});

// Ruta de Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Correo y contraseña requeridos' });
    }

    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (results.length === 0) {
            return res.status(401).json({ error: 'Credenciales inválidas (usuario no encontrado)' });
        }

        const usuario = results.results ? results.results[0] : results[0];

        // Comparar contraseña
        const esValida = await bcrypt.compare(password, usuario.password);
        if (!esValida) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        res.json({ 
            mensaje: 'Login exitoso 🎉', 
            usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email } 
        });
    });
});

module.exports = router;