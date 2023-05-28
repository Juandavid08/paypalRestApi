import express from "express";
import pagoRoutes from './routes/pago.routes.js'
import { PORT } from './config.js';

const app = express();

app.use(pagoRoutes);

app.listen(PORT);
console.log("Servidor en el puerto: ", PORT);