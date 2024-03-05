import React, { useEffect, useState } from "react";
import { Link, params } from "react-router-dom";
import { Global } from "../../helper/Global";

export const Characters = () => {
  // Declaramos variables para guardar datos
  const [characters, setCharacters] = useState([]);

  // Consultamos la api para sacar los datos
  const consulta = async () => {
    const request = await fetch(
      Global.url +
        "characters?ts=1&apikey=f736789c682d546c399cb7f456090095&hash=2bb6d1f719185fe552cc960838cefabf"
    );
    const data = await request.json();
    // Verificar si la respuesta contiene los datos de los personajes
    if (data && data.data && data.data.results) {
      // Extraer la lista de personajes
      const charactersList = data.data.results;
      // Asignar la lista de personajes al estado characters
      setCharacters(charactersList);
    }
  };
  // Usamos useEffect para que cargue cada vez que la pagina actualiza

  useEffect(() => {
    consulta();
  }, []);

  console.log("Este es el resultado", characters);

  return (
    <>
      <div>
        {/* Mostrar la lista de personajes */}
        {characters.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </div>
    </>
  );
};
