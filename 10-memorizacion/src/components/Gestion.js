import React, { useEffect, useState } from "react";
import { Empleados } from "./Empleados";

const Gestion = () => {
  const [nombre, setNombre] = useState("");
  const [pagina, setPagina] = useState(1);

  const asignarGestor = (e) => {
    setNombre(e.target.value);
  };

  useEffect(() => {
    console.log("Vista gestion actualizada");
  }, [nombre, pagina]);

  return (
    <div>
      <h1>Nombre del gestor: {nombre}</h1>
      <input
        type="text"
        onChange={asignarGestor}
        placeholder="Introduce tu nombre de gestor"
      />
      <h2>Listado de empleados</h2>
      <p>Los usuarios son gestionados por {nombre} json place holder</p>
      <button
        onClick={() => {
          setPagina(1);
        }}
      >
        Pagina 1
      </button>
      <button
        onClick={() => {
          setPagina(2);
        }}
      >
        Pagina 2
      </button>
      <Empleados pagina={pagina} />
    </div>
  );
};

export default Gestion;
