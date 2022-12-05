import { useEffect, useState } from "react"

const ItemCount = ({ stock, initial,  addItemButton }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(initial)
    },[])

    const sumar = () => {
        // console.log(stock) // Control
        if (counter < stock)
        {
        setCounter(counter + 1)}
    }

    const restar = () => {
        if (counter != 0){
        setCounter(counter - 1)}
    }

    return (
        <ul className="buttons__ontainer">
           <li> <button className="qty__button" onClick={sumar}>+</button></li>
           <li> <button className="qty__button" onClick={restar}>-</button></li>
           <li className="cantidad">{counter}</li>
           <li><button className="add__button" onClick={() => addItemButton(counter)}>AGREGAR AL CARRITO</button></li>
        </ul>
    )
}

export default ItemCount