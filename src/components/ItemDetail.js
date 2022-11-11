
const ItemDetail = ({item}) =>  {
    return (
        <>
        {
            item
            ? 
            <div>
                <h1>
                    <div>
                        <img src= {item.pictureUrl} />
                    </div>
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                        <p>$ {item.price}</p>
                        <p>{item.price} unidades en stock</p>
                    </div>
                
                </h1>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;