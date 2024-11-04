import { Card } from "../../common/card/Card";
import { products } from "../../common/products";
//let task = new Promise((res, rej) => {});
let myProductsPromise = new Promise((res, rej) => {
  if (products.length === 0) {
    rej("Productos vacios");
  } else {
    res(products);
  }
});
export const ItemListConteiner = ({ darkMode }) => {
  myProductsPromise
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div style={{ backgroundColor: darkMode ? "black" : "white" }}>
      <Card title="Nike" price={1200} stock={5} />
    </div>
  );
};
