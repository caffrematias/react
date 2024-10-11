import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="conteiner-navbar">
        <img
          src="https://res.cloudinary.com/dep7mdkof/image/upload/v1728667236/logo_wyaloh.jpg"
          alt="Logo"
          style={{
            margin: "10px",
            width: "300px" /* Ancho fijo */,
            height: "200px" /* Alto fijo */,
          }}
        />
        <ul>
          <li>Todas</li>
          <li>Picante suave</li>
          <li>Picante promedio</li>
          <li>Picante extremo</li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
