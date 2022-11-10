import Productos from "../containers/Productos"

const ItemListContainer = (props) => {
    return (
        <div className="saludo">
            {props.greeting}

            <Productos />
        </div>
    )
}

export default ItemListContainer