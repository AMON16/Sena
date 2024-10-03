import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/user.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000');
});
