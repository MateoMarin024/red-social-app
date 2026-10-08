const express = require('express');
const router = express.Router();
const db = require('../db.cjs');

// Obtener todos los usuarios
router.get('/', (req, res) => {
    db.query('SELECT id, nombre, email, fecha_creacion FROM usuarios', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT id, nombre, email, fecha_creacion FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(results[0]);
    });
});

module.exports = router;