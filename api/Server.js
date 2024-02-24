const express = require('express');
const bodyParser = require('body-parser'); // Si aún no lo has instalado, npm install body-parser
const { pool } = require('./db'); // Ajusta la ruta según la ubicación de tu archivo db.js

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Middleware para analizar el cuerpo de la solicitud en formato JSON

// Ruta para manejar la petición de enviar mensaje
app.post('/api/enviarmensaje', async (req, res) => {
  try {
    const { Nombre, Apellido, Mensaje } = req.body;

    // Utiliza la pool de conexiones para realizar la consulta a la base de datos
    const [rows, fields] = await pool.query('INSERT INTO tu_tabla (nombre_columna_nombre, nombre_columna_apellido, nombre_columna_mensaje) VALUES (?, ?, ?)', [Nombre, Apellido, Mensaje]);

    // Puedes enviar una respuesta al cliente si lo deseas
    res.status(200).json({ mensaje: 'Mensaje enviado correctamente', id: rows.insertId });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});