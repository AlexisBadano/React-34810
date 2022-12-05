import { useEffect, useState } from "react";
import { firebaseFetch } from "../utils/firebaseFetch";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const Productos = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firebaseFetch(idCategory)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
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
