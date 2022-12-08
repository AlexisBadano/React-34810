import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  // Function that adds the products and their quantity to the Cart

  const addToCart = (item, qty) => {
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

  // Function for clearing the Cart

  const clearCart = () => {
    setCartList([]);
  };

  // Function for removen a certain Item

  const removeItem = (id) => {
    let result = cartList.filter((item) => item.idItem != id);
    setCartList(result);
  };

  // Function for calculating how many items are there in the Cart

  const itemsQty = () => {
    let qty = cartList.map((item) => item.qtyItem);
    return qty.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  // Function to calculate the price per the qty of the Items

  const pricePerItem = (idItem) => {
    let itemIndex = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[itemIndex].costItem * cartList[itemIndex].qtyItem;
  };

  // Function to calculate the subTotal of all the items

  const subTotal = () => {
    let subTotal = cartList.map((item) => pricePerItem(item.idItem));
    return subTotal.reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0
    );
  };

  // Function to show the total of all the subTotals

  const total = () => {
    return subTotal();
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        removeItem,
        itemsQty,
        pricePerItem,
        subTotal,
        total,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
