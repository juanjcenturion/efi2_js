import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ loggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'usuario' && password === 'demo') {
      loggedIn(true); 
      navigate('/');
    } else {
      alert('Usuario o Contraseña Incorrectos')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Iniciar sesión</h2>
        <div className="mt-4">
          <label className="block text-gray-600">Usuario</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-600">Contraseña</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <button
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;