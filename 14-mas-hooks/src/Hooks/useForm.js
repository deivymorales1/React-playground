import { useState } from "react";

export const useForm = (objetoInicial = {}) => {
  const [formulario, setFormulario] = useState(objetoInicial);

  const serializarFormulario = (formulario) => {
    // Objeto para sacar datos del form, guarda datos
    const formData = new FormData(formulario);

    const objCompleto = {};

    for (let [name, value] of formData) {
      objCompleto[name] = value;
    }

    return objCompleto;
  };

  const enviado = (e) => {
    e.preventDefault();

    let curso = serializarFormulario(e.target);

    setFormulario(curso);

    document.querySelector(".codigo").classList.add("enviado");
  };

  const cambiado = ({ target }) => {
    // Permite desestructurar el objeto
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  // Devolver metodos
  return {
    formulario,
    enviado,
    cambiado,
  };
};
