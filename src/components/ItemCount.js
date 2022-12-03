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
        <>
           <li> <button onClick={sumar}>+</button></li>
           <li> <button onClick={restar}>-</button></li>
           <li>cantidad: {counter}</li>
           <li><button onClick={() => addItemButton(counter)}>AGREGAR AL CARRITO</button></li>
        </>
    )
}

export default ItemCount