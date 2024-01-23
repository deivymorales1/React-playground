import { useEffect, useState } from "react";

export const useAjax = (url) => {
  // Seteamos valor de datos a null
  const [estado, setEstado] = useState({
    datos: null,
    cargando: true,
  });

  const getData = async () => {
    // Cuando cargamos datos es true
    setEstado({
      ...estado,
      cargando: true,
    });

    try {
      // guardar peticion
      const peticion = await fetch(url);

      if (!peticion.ok) {
        throw new Error(`HTTP error! Status: ${peticion.status}`);
      }

      const { data } = await peticion.json();
      setEstado({
        datos: data,
        cargando: false,
      });
    } catch (error) {
      console.log("Error fetching data: ", error);
      setEstado({
        datos: null,
        cargando: false,
      });
    }
  };

  useEffect(() => {
    getData();
    console.log(url);
  }, [url]);

  return {
    datos: estado.datos,
    cargando: estado.cargando,
  };
};
