import { Link } from "react-router-dom";

<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
></link>;

const Item = (props) => {
  return (
    <Link to={`/item/${props.id}`} className="card" href="../public/index.html">
      <div className="">
        <img
          className="card__background"
          src={props.imagen}
          alt="Foto de producto"
        />
      </div>

      <div className="card__content">
        <p className="card__category">{props.category}</p>
        <h3 className="card__heading">{props.title}</h3>
        <h3 className="card__price">${props.price}</h3>
      </div>
    </Link>
  );
};

export default Item;
