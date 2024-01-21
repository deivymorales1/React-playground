import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Inicio = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);
  console.log(usuario);
  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de inicio</p>
      <p>Nombre: {usuario.web}</p>
      {/*<strong> {compartida.titulo} </strong>*/}
    </div>
  );
};
