import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {


  const [itemCounter, setItemCounter] = useState(0);
  const {addToCart} = useContext(CartContext);
  
  
  const addItemButton = (qty) => {
    setItemCounter(qty);
    addToCart(item, qty);
  };
  

  return (
    <>
      {item ? (
        <div className="product__container">
          
            <div className="imgProd">
              <img src={item.imagen} alt="imagen del producto"/>
            </div>
            <div className="product">
              <h2 className="product__title">{item.title}</h2>
              <h3> Descripcion:
              <p className="product__description">{item.description}</p>
              </h3>
              <h3> Precio:
              <p className="product__price">${item.price}</p>
              </h3>
              <h3> stock
              <p className="product__stock">{item.stock} unidades en stock</p>
              </h3>
            </div>
          
          
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <div className="buttons__container">
      {
                        itemCounter === 0
                        ? <ItemCount stock={item.stock} initial={itemCounter} addItemButton={addItemButton} />
                        : <Link to='/cart'><button className="checkout__button"><span className="checkout__button__span">CheckOut</span></button></Link>
                    }
      </div>
    </>
  );
};

export default ItemDetail;
