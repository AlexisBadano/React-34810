import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    console.log(item, qty);
    const alreadyInCart = cartList.find((prod) => prod.idItem == item.id);
    if (qty == 0) {
      alert("Debes elegir al menos 1 producto");
    } else {
      if (alreadyInCart !== undefined) {
        const confirmBox = window.confirm(
          "Ya tienes este producto en el producto en el carrito!, deseas modificarlo?"
        );
        if (confirmBox === true) {
          alert(
            `Has agregado ${qty} ${item.category} ${item.title} al carrito`
          );
          alreadyInCart.qtyItem += qty;
        }
      } else {
        setCartList([
          ...cartList,
          {
            idItem: item.id,
            nameItem: item.title,
            costItem: item.price,
            qtyItem: qty,
          },
        ]);
        alert(`Has agregado ${qty} ${item.category} ${item.title} al carrito`);
      }
    }
  };

  const clearCart = () => {
    setCartList([]);
  };

  const removeItem = (id) => {
    let result = cartList.filter((item) => item.idItem != id);
    setCartList(result);
  };

    const itemsQty = () => {
      let qty = cartList.map(item => item.qtyItem);
      return qty.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
  }

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, clearCart, removeItem, itemsQty }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
