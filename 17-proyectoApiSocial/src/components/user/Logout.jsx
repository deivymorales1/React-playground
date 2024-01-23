import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Logout = () => {
  const { setAuth, setCounters } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Vaciar local storage
    localStorage.clear();

    // Setear estado globales a vacio
    setAuth({});
    setCounters({});

    // Redireccion a login
    navigate("/login");
  });

  return (
    <div>
      <h1>Cerrando sesion ...</h1>
    </div>
  );
};

export default Logout;
