import { useState } from 'react';
import '../styles/Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');

    function cambiarEmail(evento) {
        setEmail(evento.target.value);
    }

    function cambiarContrasena(evento) {
        setContrasena(evento.target.value);
    }

    async function registrar() {
        if (!email || !contrasena) {
            alert('Complete los campos, son obligatorios');
            return;
        }

        const peticion = await fetch('http://localhost:4000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password: contrasena })
        });

        const data = await peticion.json(); // Obtener la respuesta en formato JSON

        if (peticion.ok) {
            alert('Registro exitoso');
        } else {
            // Mostrar el mensaje de error devuelto por el backend
            alert(data.error || 'Error en el registro');
        }
    }

    return (
        <>
            <div className='container'>
                <div>
                    <h1>REGISTRO REACT</h1>
                </div>
                <div>
                    <input
                        placeholder="Ingrese usuario"
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
                </div>
                <div>
                    <button onClick={registrar}>REGISTRAR</button>
                </div>
            </div>
        </>
    );
}

export default Register;
