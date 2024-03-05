import React from "react";
import { useParams } from "react-router-dom";

const Persona = () => {
  let { nombre, apellido } = useParams();

  return (
    <div>
      {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
      {nombre && (
        <h1>
          Pagina de persona : {nombre} {apellido}{" "}
        </h1>
      )}
      <p>Esta es la pagina de persona</p>
    </div>
  );
};

export default Persona;
