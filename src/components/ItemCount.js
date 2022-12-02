import { useState } from "react"

const ItemCount = () => {
    const [counter, setCounter] = useState(0);

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

    return (
        <>
           <li> <button onClick={sumar}>+</button></li>
           <li> <button onClick={restar}>-</button></li>
        </>
    )
}

export default ItemCount