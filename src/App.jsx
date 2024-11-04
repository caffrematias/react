import { Navbar } from "./layout/navbar/Navbar";
import { ItemListConteiner } from "./pages/itemListConteiner/itemListConteiner";
import { Counter } from "./common/counter/counter";
import { useState } from "react";
import CartConteiner from "./pages/cart/CartConteiner";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };
  // const [entraEnElDom, setEntraEnElDom] = useState(false);
  // const montarOdesmontar = () => {
  //  setEntraEnElDom(!entraEnElDom);

  return (
    <>
      <button onClick={cambiarModo}>Cambiar modo</button>
      <Navbar darkMode={darkMode} />
      <ItemListConteiner darkMode={darkMode} />
      <Counter />
      <CartConteiner />
    </>
  );
}
export default App;
