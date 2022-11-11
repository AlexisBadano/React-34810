
const ItemDetail = ({ item }) => {

        return (
    <div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
    </div>
  )
}

export default ItemDetail;