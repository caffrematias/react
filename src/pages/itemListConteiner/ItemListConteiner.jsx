import { Card } from "../../common/card/Card";
export const ItemListConteiner = ({ darkMode }) => {
  return (
    <div style={{ backgroundColor: darkMode ? "black" : "white" }}>
      <Card title="Nike" price={1200} stock={5} />
    </div>
  );
};
