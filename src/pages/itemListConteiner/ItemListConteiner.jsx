import { useEffect } from "react";
import { Card } from "../../common/card/Card";
import { products } from "../../common/products";
import { useState } from "react";
//let task = new Promise((res, rej) => {});
let myProductsPromise = new Promise((res, rej) => {
  if (products.length === 0) {
    rej("Productos vacios");
  } else {
    res(products);
  }
});
export const ItemListConteiner = ({ darkMode }) => {
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    myProductsPromise
      .then((data) => {
        setMyProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="il-container">
      {myProducts.map((prod) => (
        <Card
          key={prod.id}
          title={prod.title}
          price={prod.price}
          stock={prod.stock}
        />
      ))}
      ;
    </div>
  );
};
