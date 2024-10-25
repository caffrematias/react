import { useState } from "react";
export const Counter = () => {
  const [contador, funcionContador] = useState(0);

  const sumar = () => {
    funcionContador(contador + 1);
  };
  const restar = () => {
    funcionContador(contador - 1);
  };
  return (
    <div style={{ margin: "50px" }}>
      <h2>Contador = {contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
    </div>
  );
};
