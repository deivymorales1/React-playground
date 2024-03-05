import React from "react";
import { useParams } from "react-router-dom";

const Persona = () => {
  const { nombre, apellido } = useParams();

  return (
    <div>
      <h1>
        Pagina de persona : {nombre} {apellido}{" "}
      </h1>
      <p>Esta es la pagina de persona</p>
    </div>
  );
};

export default Persona;
