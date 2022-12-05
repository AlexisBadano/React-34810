import { useContext } from "react";
import { CartContext } from "./CartContext";
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  increment,
  updateDoc,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
  const productos = useContext(CartContext);

  const createOrder = () => {
    let order = {
      buyer: {
        name: "Alex Marin Mendez",
        email: "alexmendez@elmejorprofe.com",
        phone: "1269696969", //nice
      },
      date: serverTimestamp(),
      items: productos.cartList.map((item) => ({
        id: item.idItem,
        price: item.costItem,
        title: item.nameItem,
        qty: item.qtyItem,
      })),
    };
    console.log(order);

    const sendOrderToFirebase = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    sendOrderToFirebase()
      .then((response) => {
        alert(`orden ${response.id} enviada!`);
        productos.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, { stock: increment(-item.qtyItem) });
        });
        productos.clearCart();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cart__container">
      <h1>Tu Carrito:</h1>
      <div className="cart__container2">
      <ul className="cart__items">
        {productos.cartList.length === 0 ? (
          <li>No tienes ningún producto en Carrito 😪!</li>
        ) : (
          productos.cartList.map((item) => (
            <div className="cart__list__container">
              <div className="cart__list__title"> Producto:
                <li className="cart__list__item">{item.nameItem}</li>
              </div>
              <div className="cart__list__title"> Cantidad:
                <li className="cart__list__item">{item.qtyItem}</li>
              </div>
              <div className="cart__list__title"> Total:
                <li className="cart__list__item">
                  ${productos.pricePerItem(item.idItem)}
                </li>
              </div>

              <li className="cart__list__item">
                <button
                  className="remove__button"
                  onClick={() => productos.removeItem(item.idItem)}
                >
                  Remover
                </button>
              </li>
            </div>
          ))
        )}
      </ul>
      
      <ul className="cart__summary">
        {productos.cartList.length !== 0 ? (
          <div className="cart__summary__container">Total:
            <div>${productos.total()}</div>
            <button
              className="buy__button"
              onClick={() => {
                createOrder();
              }}
            >
              Finalizar la compra
            </button>
          </div>
          
        ) : (
          <div>
            <button
              className="buy__button__disabled"
              onClick={() => {
                alert("No tienes ningun producto en el carrito!");
              }}
            >
              Finalizar la compra
            </button>
          </div>
        )}
      </ul>
    </div>
    </div>
  );
};

export default Cart;
