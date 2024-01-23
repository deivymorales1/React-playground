import { useForm } from "../Hooks/useForm";

const MiFormulario = () => {

  const {formulario, enviado, cambiado} = useForm({})

  return (
    <div>
      <h1>MiFormulario</h1>
      <p>Formulario para guardar un curso</p>
      <p>Curso guardado: {formulario.titulo} </p>
      <pre className="codigo"> {JSON.stringify(formulario)} </pre>
      <form className="mi-formulario" onSubmit={enviado}>
        <input
          type="text"
          name="titulo"
          onChange={cambiado}
          placeholder="titulo"
        />
        <input
          type="number"
          name="anio"
          onChange={cambiado}
          placeholder="Anio publicacion"
        />
        <textarea
          name="descripcion"
          onChange={cambiado}
          placeholder="Descripcion "
        />
        <input
          type="text"
          name="autor"
          onChange={cambiado}
          placeholder="autor"
        />
        <input
          type="email"
          name="email"
          onChange={cambiado}
          placeholder="Correo de contacto"
        />
        <input type="submit" value="Envair" />
      </form>
    </div>
  );
};

export default MiFormulario;
