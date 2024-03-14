// server.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import enviarMensaje from './controllers.js';

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.post('/api/enviarmensaje', enviarMensaje);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor de la API corriendo en el puerto ${PORT}`);
});
