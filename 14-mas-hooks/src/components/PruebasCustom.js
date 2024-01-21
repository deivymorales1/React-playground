import { useMayus } from "../Hooks/useMayus";

export const PruebasCustom = () => {
  const { estado, mayusculas, minusculas, concatenar } =
    useMayus("Deivy Rocha");

  return (
    <div>
      <h1>Probando componentes personalizados</h1>
      <h2> {estado} </h2>

      <button onClick={mayusculas}>Poner en mayusculas</button>
      <button onClick={minusculas}>Poner en mayusculas</button>
      <button onClick={(e) => concatenar("Probando hooks personalizados - ")}>
        Poner en mayusculas
      </button>
    </div>
  );
};
