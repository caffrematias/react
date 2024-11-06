import { Navbar } from "./layout/navbar/Navbar";

import { useState } from "react";
import { ItemListConteiner } from "./pages/itemListConteiner/ItemListConteiner";
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
    </>
  );
}
export default App;
