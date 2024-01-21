import React from "react";

const MiFormulario = () => {
  return (
    <div>
      <h1>MiFormulario</h1>
      <p>Formulario para guardar un curso</p>
      <p>Curso guardado: </p>
      <form className="mi-formulario">
        <input type="text" name="titulo" placeholder="titulo" />
        <input type="number" name="anio" placeholder="Anio publicacion" />
        <textarea name="descripcion" placeholder="Descripcion " />
        <input type="text" name="autor" placeholder="autor" />
        <input type="email" name="email" placeholder="Correo de contacto" />
        <input type="submit" value="Envair /" />
      </form>
    </div>
  );
};

export default MiFormulario;
