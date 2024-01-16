export const GuardarEnStorage = (clave, elemento) => {
  // Conseguir los elementos del local storage
  let elementos = JSON.parse(localStorage.getItem(clave));
  console.log(elementos);

  // Comprobar si es un array
  if (Array.isArray(elementos)) {
    // Guardar dentro del array un elemento nuevo
    elementos.push(elemento);
  } else {
    // Crear un array con la nueva elemento
    elementos = [elemento];
  }

  // Guardar en el local storage
  localStorage.setItem(clave, JSON.stringify(elementos));
  //Devolver el objeto guardado
  return elemento;
};
