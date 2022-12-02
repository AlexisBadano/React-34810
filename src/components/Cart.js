import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const productos = useContext(CartContext);
  console.log(productos);

  return (
    <>
      <h1>TU Carrito:</h1>
      <ul>
        {productos.length === 0 ? (
          <li>No tienes ningún producto en Carrito 😪!</li>
        ) : (
          productos.map((item) => <li>{item.name}</li>)
        )}
      </ul>
    </>
  );
};

export default Cart;
