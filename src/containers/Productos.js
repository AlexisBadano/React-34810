import { useEffect, useState } from "react";
import Producto from "../components/Producto";
import { productosArray } from "../utils/arrayProductos";
import { customFetch } from "../utils/customFetch";

const Productos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    customFetch(2000, productosArray)
      .then((response) => setData(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="productos">
      <div className="card-grid">
        {data.map((item) => (
          <Producto
            key={item.id}
            imagen={item.imagen[0]}
            title= {item.title}
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
