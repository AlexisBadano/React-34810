const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <div>
            <div>
                <div>
                    <strong>$ {price}</strong>
                </div>
                <div>
                 unid.
                </div>
                <div style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}><p>Details</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Item;