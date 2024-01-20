import React, { useReducer, useEffect } from "react";
import { JuegoReducer } from "../reducers/JuegoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("juegos")) || [];
};

export const MisJuegos = () => {
  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    // Definir los campos de juego
    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    const accion = {
      type: "crear",
      payload: juego,
    };

    dispatch(accion);
    console.log(juegos);
  };

  const borramelo = (id) => {
    const action = {
      type: "borrar",
      payload: id,
    };
    dispatch(action);
  };

  const editar = (e, id) => {
    console.log("editar", id);
    let juego = {
      id,
      titulo: e.target.value,
      descripcion: e.target.value,
    };

    const action = {
      type: "editar",
      payload: juego,
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>Estos son mis juegos</h1>

      <p>Numero de videojuegos: {juegos.length} </p>

      <ul>
        {juegos.map((juego) => (
          <li key={juego.id}>
            {" "}
            {juego.titulo}
            <p>
              <button onClick={(e) => borramelo(juego.id)}>X</button>
              <input
                type="text"
                onBlur={(e) => editar(e, juego.id)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    editar(e, juego.id);
                    console.log("Enter presionado");
                  }
                }}
              />
            </p>
          </li>
        ))}
      </ul>

      <h3>Agregar juego</h3>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" placeholder="titulo" />
        <textarea name="descripcion" placeholder="descripcion">
          {" "}
        </textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
