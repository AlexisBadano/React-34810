import { useEffect, useState } from "react";
import Producto from "./Producto";
import { productosArray } from "../utils/arrayProductos";
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";

const Productos = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory === undefined) {
      customFetch(2000, productosArray)
        .then((response) => setData(response))
        .catch((err) => console.log(err));
    } else {
      customFetch(
        2000,
        productosArray.filter((item) => item.idCategory === idCategory)
      )
        .then((response) => setData(response))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <div className="productos">
      <div className="card-grid">
        {data.map((item) => (
          <Producto
            key={item.id}
            imagen={item.imagen[0]}
            title={item.title}
            category={item.category}
            idCategory={item.idCategory}
            id={item.id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Productos;
