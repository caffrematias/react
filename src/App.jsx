import { Navbar } from "./layout/navbar/Navbar";

import { ItemListConteiner } from "./pages/itemListConteiner/itemListConteiner";
import { Counter } from "./common/counter/counter";
function App() {
  return (
    <div>
      <Navbar />
      <ItemListConteiner />
      <Counter />
    </div>
  );
}
export default App;
