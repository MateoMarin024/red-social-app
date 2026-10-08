const express = require('express');
const router = express.Router();
const db = require('../db.cjs');

// Obtener todas las publicaciones (con el nombre del usuario que publicó)
router.get('/', (req, res) => {
    const query = `
        SELECT publicaciones.*, usuarios.nombre AS autor 
        FROM publicaciones 
        JOIN usuarios ON publicaciones.usuario_id = usuarios.id 
        ORDER BY publicaciones.fecha DESC
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Crear una publicación
router.post('/', (req, res) => {
    const { usuario_id, contenido } = req.body;
    if (!usuario_id || !contenido) {
        return res.status(400).json({ error: 'Faltan datos (usuario_id o contenido)' });
    }

    const query = 'INSERT INTO publicaciones (usuario_id, contenido) VALUES (?, ?)';
    db.query(query, [usuario_id, contenido], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ mensaje: 'Publicación creada con éxito 📝', id: result.insertId });
    });
});

module.exports = router;