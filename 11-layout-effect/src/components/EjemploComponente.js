import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// Antes de que se muestren cosas en pantalla
export const EjemploComponente = () => {
  const [mostrar, setMostrar] = useState(false);
  const caja = useRef();
  const boton = useRef();

  /*   useLayoutEffect(() => {
    console.log("useLayoutEffect : Componente cargado");
  }, []); */

  // Carga cuando ya se han mostrado cosas en pantalla
  useEffect(() => {
    console.log("useEffect : Componente cargado");

  

    if (caja.current == null) return;
    const { bottom } = boton.current.getBoundingClientRect();

    //setTimeout(() => {
    caja.current.style.marginTop = `${bottom + 45}px`;
    caja.current.style.marginLeft = `${bottom + 45}px`;
    //}, 1000);
  }, [mostrar]);

  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>
      <button
        ref={boton}
        onClick={() =>
          setMostrar((prev) => {
            console.log(!prev);
            return !prev;
          })
        }
      >
        {" "}
        Mostrar mensaje{" "}
      </button>

      {mostrar && (
        <div id="caja" ref={caja}>
          Hola, soy un mensaje {mostrar}
        </div>
      )}
    </div>
  );
};
