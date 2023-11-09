import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/AppContext';

function NavBar({ isLoggedIn, onLogout, onToggleDarkMode, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    onLogout(); // Llama a la función para actualizar el estado de autenticación en el componente padre
    navigate('/login');
  };

  return (
    <nav className={`bg-${isDarkMode ? 'gray' : 'blue'}-500 p-4`}>
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold text-xl">
          <Link to="/">Todo-List</Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex space-x-4 ${isLoggedIn ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white hover:text-gray-300">
            Inicio
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contacto
          </Link>
          <button
            className="text-white hover:text-gray-300"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
        <button
          className={`text-white hover:text-gray-300`}
          onClick={onToggleDarkMode}
        >
          {isDarkMode ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14M5 12h14"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14M5 12h14"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block text-white hover:text-gray-300 py-2">
            Inicio
          </Link>
          <Link to="/contact" className="block text-white hover:text-gray-300 py-2">
            Contacto
          </Link>
          <button
            className="block text-white hover:text-gray-300 py-2"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
        )}
    </nav>
  );
}

export default NavBar;
