import { Router } from 'express';
import pool from '../db.js';

const router = Router();

//validaciones de registro
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        // verificar si el email ya existe
        const [existeUsuario] = await pool.execute('SELECT * FROM usuarios WHERE Email = ?', [email]);
        if (existeUsuario.length > 0) {
            return res.status(400).send({ error: 'ERROR, usuario no disponible, ingrese otro' });
        }

        // si el email no existe, proceder a registrar el nuevo usuario
        const [result] = await pool.execute('INSERT INTO usuarios (Email, Contraseña) VALUES (?, ?)', [email, password]);
        res.status(201).send({ message: 'Usuario registrado exitosamente!' });
    } catch (error) {
        res.status(500).send({ error: 'Error al registrar el usuario' });
    }
});

//validaciones de login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await pool.execute('SELECT * FROM usuarios WHERE Email = ? AND Contraseña = ?', [email, password]);
        if (rows.length > 0) {
            res.status(200).send({ message: 'Login exitoso' });
        } else {
            res.status(401).send({ error: 'Credenciales incorrectas' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Error al iniciar sesión' });
    }
});

export default router;
