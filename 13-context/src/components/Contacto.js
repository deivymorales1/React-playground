import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Contacto = () => {
  const datoDesdeElContexto = useContext(PruebaContext);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Pagina de contacto</p>

      <p>Valor compartido: {JSON.stringify(datoDesdeElContexto.usuario)} </p>
    </div>
  );
};
