import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Persona = () => {
  let { nombre, apellido } = useParams();
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = `/persona/${nombre}/${apellido}`;

    if (nombre.length <= 0 && apellido.length <= 0) {
      navegar("/inicio");
    } else if (nombre === "contacto") {
      navegar("/contacto");
    } else {
      navegar(url);
    }
  };

  return (
    <div>
      {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
      {nombre && (
        <h1>
          Pagina de persona : {nombre} {apellido}{" "}
        </h1>
      )}
      <p>Esta es la pagina de persona</p>

      <form onSubmit={enviar}>
        <input type="text" name="nombre" />
        <input type="text" name="apellido" />
        <input type="submit" name="enviar" value="enviar" />
      </form>
    </div>
  );
};

export default Persona;
