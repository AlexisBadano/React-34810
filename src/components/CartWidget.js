import { TfiShoppingCart } from "react-icons/tfi";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const qtyBadge = useContext(CartContext);


  // Llamo a una funcion anonima por que sino arroja error, fue lo unico que encontre en google para arreglarlo
  return (
    <>
      {(() => {
        if (qtyBadge.itemsQty() === 0) {
          return <TfiShoppingCart className="cartIcon" />;
        } else {
          return (
            <>
              <p className="badge">{qtyBadge.itemsQty()}</p>
              <TfiShoppingCart className="cartIcon" />
            </>
          );
        }
      })()}
    </>
  );
};

export default CartWidget;
