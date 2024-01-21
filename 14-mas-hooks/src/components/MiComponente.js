import React, { useId } from "react";

export const MiComponente = () => {
  const id = useId();
  const segundo_id = useId();
  const tercer_id = useId();

  console.log(tercer_id);

  return (
    <div>
      <h1>Hook useId</h1>
      <input type={id} name="nombre" placeholder="Nombre" />
    </div>
  );
};
