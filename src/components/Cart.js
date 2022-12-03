import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const productos = useContext(CartContext);
  console.log(productos);

  return (
    <>
      <h1>TU Carrito:</h1>
      <ul>
        {productos.cartList.length === 0 
        ? (<li>No tienes ningún producto en Carrito 😪!</li>)
        : (productos.cartList.map((item) => 
        <>
             <li>{item.nameItem}</li>
             <li>{item.qtyItem}</li>
             <li><button onClick={() => productos.removeItem(item.idItem)}>Remover</button></li>
        </>)
        )}
      </ul>
    </>
  );
};

export default Cart;
