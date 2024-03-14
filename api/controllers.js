// controllers.js

import { pool } from './db.js';

const enviarMensaje = async (req, res) => {
  const { Nombre, Apellido, Mensaje } = req.body;

  try {
    if (Mensaje.length > 300) {
      return res.status(400).json({ error: 'El mensaje no puede tener más de 300 caracteres' });
    }

    const connection = await pool.getConnection();
    const result = await connection.query('INSERT INTO guscor (nombre, apellido, mensaje) VALUES (?, ?, ?)', [Nombre, Apellido, Mensaje]);
    connection.release();

    res.status(200).json({ mensaje: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default enviarMensaje;
