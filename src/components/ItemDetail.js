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
        <div>
          <h1>
            <div>
              <img src={item.imagen} alt="imagen del producto"/>
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <p>$ {item.price}</p>
              <p>{item.stock} unidades en stock</p>
            </div>
          </h1>
          {
                        itemCounter === 0
                        ? <ItemCount stock={item.stock} initial={itemCounter} addItemButton={addItemButton} />
                        : <Link to='/cart'><button>CheckOut</button></Link>
                    }
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default ItemDetail;
