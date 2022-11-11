<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
></link>;

import Link from "react-router-dom"

const Item = (id, title, price, img, category) => {
  return (
    <Link to={`/item/${id}`} className="card">
      <div className="">
        <img src={img} className="" />
      </div>

      <div className="">
        <p className="">{category}</p>
        <h2 className="">{title}</h2>
        <h3 className="">${price}</h3>
      </div>
      </Link>
  );
};

export default Item;
