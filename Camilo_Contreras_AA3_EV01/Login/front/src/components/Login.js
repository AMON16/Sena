/*import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

function Login() {
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    function cambiarEmail(evento) {
        setEmail(evento.target.value);
    }

    function cambiarContrasena(evento) {
        setContrasena(evento.target.value);
    }

    async function ingresar() {
        const peticion = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: contrasena })
        });

        if (peticion.ok) {
        alert('Ingreso correcto');
        navigate('/principal');
        } else {
        alert('Credenciales incorrectas');
        }
    }

    return (
        <div>
            <h1>LOGIN REACT</h1>
            <input
                placeholder="Ingrese email"
                type="text"
                value={email}
                onChange={cambiarEmail}
            />
            <input
                placeholder="Ingrese contraseña"
                type="password"
                value={contrasena}
                onChange={cambiarContrasena}
            />
            <button onClick={ingresar}>INGRESAR</button>
            <p>
                ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
            </p>
        </div>
    );
}

export default Login;*/
