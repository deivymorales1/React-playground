import React, { useState } from "react";
import { useAjax } from "../Hooks/useAjax";

export const MiUsuario = () => {
  
  const [url, setUrl] = useState('"https://reqres.in/api/users/1"');
  // Usamos el hook
  const { datos, cargando } = useAjax(url);

  const getId = (e) => {
    let id = parseInt(e.target.value);
    setUrl("https://reqres.in/api/users/" + id);
  };

  return (
    <div>
      <h1>Mi usuario</h1>
      <p>Datos del usuario: </p>
      <p> {cargando ? "Cargando..." : ""} </p>
      <p>
        {" "}
        {datos?.first_name} {datos?.last_name}{" "}
      </p>
      <input type="number" name="id" onChange={getId} />
    </div>
  );
};
