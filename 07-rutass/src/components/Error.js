import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <strong>Esta pagina no existe</strong>
      <Link to="/inicio">Vuelve al inicio</Link>
    </div>
  );
};

export default Error;
