import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateRoute = ({ logged }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate('/login');
    }
  }, [logged, navigate]);

  return <Outlet />;
};

export default PrivateRoute;
