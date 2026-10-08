const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Inicializamos la aplicación de Express
const app = express();

// Middlewares esenciales
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Agregamos la extensión .cjs aquí
const db = require('./db.cjs');

// Y agregamos la extensión .cjs a cada ruta
const usuariosRoutes = require('./routes/usuarios.cjs');
const publicacionesRoutes = require('./routes/publicaciones.cjs');
const gruposRoutes = require('./routes/grupos.cjs');
const mensajesRoutes = require('./routes/mensajes.cjs');
const authRoutes = require('./routes/auth.cjs');

// Usar las rutas en la API
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/publicaciones', publicacionesRoutes);
app.use('/api/grupos', gruposRoutes);
app.use('/api/mensajes', mensajesRoutes);
app.use('/api/auth', authRoutes);

// Puerto y encendido del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 ¡Servidor backend corriendo exitosamente en el puerto ${PORT}!`);
});