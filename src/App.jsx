// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Routes/Login/Login'
import Home from './Routes/Home/Home';
import Contact from './Routes/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [logged, setLogged] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Utiliza useEffect para cargar las tareas desde la API cuando el usuario está autenticado
  useEffect(() => {
    if (logged) {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => setTasks(data));
    }
  }, [logged]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLogged(false);
  };
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  return (
    <div>
      <BrowserRouter>
        <NavBar isLoggedIn={logged} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Login loggedIn={setLogged} />} />
          <Route element={<PrivateRoute logged={logged} tasks={tasks} />}>
            <Route path="/" element={<Home tasks={tasks} />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
