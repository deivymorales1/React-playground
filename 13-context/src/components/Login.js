import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Login = () => {
  // Guardar datos en context
  const { usuario, setUsuario } = useContext(PruebaContext);

  const guardarDatos = (e) => {
    e.preventDefault();

    let usuario_identificado = {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value,
    };
    setUsuario(usuario_identificado);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Pagina de login</p>
      <form className="login" onSubmit={guardarDatos}>
        <input type="text" name="nick" placeholder="NickName: " />
        <input type="text" name="nombre" placeholder="Nombre: " />
        <input type="text" name="web" placeholder="Web: " />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
