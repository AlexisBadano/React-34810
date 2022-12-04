import { useEffect, useState } from "react";
import { productosArray } from "../utils/arrayProductos";
import { customFetch } from "../utils/customFetch";
import {firebaseFetch} from "../utils/firebaseFetch"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


const Productos = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  // useEffect(() => {
  //   if (idCategory == undefined) {
  //     customFetch(2000, productosArray)
  //       .then((response) => setData(response))
  //       .catch((err) => console.log(err));
  //   } else {
  //     customFetch(
  //       2000,
  //       productosArray.filter((item) => item.idCategory == idCategory)
  //     )
  //       .then((response) => setData(response))
  //       .catch((err) => console.log(err));
  //   }
  // }, [idCategory]);

  useEffect(() => {
    firebaseFetch(idCategory)
        .then(result => setData(result))
        .catch(err => console.log(err));
}, [idCategory]);

  return (
    <div className="productos">
      <div className="card-grid">
        <>
          <ItemList items={data} />
        </>
      </div>
    </div>
  );
};

export default Productos;
