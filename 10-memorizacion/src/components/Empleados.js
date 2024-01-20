import React, { useEffect, useState } from "react";

// Memorizar resultado de un componente y solo renderiza si cambia la vista.
export const Empleados = React.memo(({ pagina, mensaje }) => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    console.log("Se ha vuelto a renderizar empleados");
  }, [empleados]);

  const conseguirEmpleados = async (p) => {
    const url = "https://reqres.in/api/users?page=" + p;
    const peticion = await fetch(url);
    const { data: empleados } = await peticion.json();

    setEmpleados(empleados);
  };

  useEffect(() => {
    conseguirEmpleados(pagina);
    mensaje();
  }, [pagina]);

  return (
    <div>
      <p>Mostrando la pagina: {pagina} </p>
      <ul className="empleados">
        {empleados.length >= 1 &&
          empleados.map((empleado) => {
            return (
              <li key={empleado.id}>
                {empleado.first_name + " " + empleado.last_name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});
