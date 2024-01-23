import React, { useRef } from "react";

export const Formulario = () => {
  const nombreValue = useRef("deivy");
  const apellidoValue = useRef("deivy");
  const emailValue = useRef("deivy");
  const miCaja = useRef();

  const mostrar = (e) => {
    e.preventDefault();
    // mi caja
    let { current: caja } = miCaja;
    caja.classList.add("fondoverde");
    caja.innerHTML = "Formulario enviado";
  };

  return (
    <div>
      <h1>Formulario</h1>

      <div ref={miCaja} className="miCaja">
        <h2>Pruebas con use Ref</h2>
      </div>

      <form onSubmit={mostrar}>
        <input type="text" placeholder="Nombre" ref={nombreValue} />
        <br />
        <br />
        <input type="text" placeholder="Apellido" ref={apellidoValue} />
        <br />
        <br />
        <input type="email" placeholder="correo" ref={emailValue} />
        <br />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
