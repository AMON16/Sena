import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarContrasena(evento) {
    setContrasena(evento.target.value);
  }

  async function ingresar() {
    const peticion = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: usuario, password: contrasena })
    });

    if (peticion.ok) {
      navigate('/principal');
    } else {
      alert('Credenciales incorrectas');
    }
  }

  return (
    <>
      <div className='container'>
          <div className='title_login'>
            <h1>LOGIN REACT</h1>
          </div> 
          <div>
            <input
              placeholder="Ingrese usuario"
              type="text"
              value={usuario}
              onChange={cambiarUsuario}
            />
            <input
              placeholder="Ingrese contraseña"
              type="password"
              value={contrasena}
              onChange={cambiarContrasena}
            />
          </div>
          <div>
            <button onClick={ingresar}>INGRESAR</button>
          </div>
          <div>
            <p>
              ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
            </p>
          </div>
        
        </div>
    </>
  );
}

export default App;
