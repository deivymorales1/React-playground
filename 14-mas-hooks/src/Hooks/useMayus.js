import { useState } from "react";

export const useMayus = (texto) => {
  const [miTexto, setMiTexto] = useState(texto);

  const mayusculas = () => {
    setMiTexto(miTexto.toUpperCase());
  };

  const minusculas = () => {
    setMiTexto(miTexto.toLowerCase());
  };

  const concatenar = (added) => {
    setMiTexto(added + " " + miTexto);
  };

  return {
    estado: miTexto,
    mayusculas,
    minusculas,
    concatenar,
  };
};
