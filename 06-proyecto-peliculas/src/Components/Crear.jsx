import React, { useState } from "react";
import { GuardarEnStorage } from "../Helpers/GuardarEnStorage";

const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir pelicula";

  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  //descripcion
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    // conseguir datos del form
    let target = e.target;
    let titulo = e.target.titulo.value;
    let descripcion = e.target.descripcion.value;

    // Crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo, // titulo : titulo
      descripcion,
    };
    // Guardamos estado
    setPeliState(peli);

    // Actualizar estado del listado principal
    setListadoState((elementos) => {
      return [...elementos, peli];
    });

    // Guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);
  };

  return (
    <>
      <div className="add">
        <h3 className="title"> {tituloComponente} </h3>

        <strong>
          {titulo && descripcion && "Has creado la pelicula: " + titulo}
        </strong>

        <form onSubmit={conseguirDatosForm}>
          <input type="text" id="title" name="titulo" placeholder="Titulo" />
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripcion"
          ></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};

export default Crear;
