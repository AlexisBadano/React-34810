import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchDetail } from "../utils/firebaseFetch";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchDetail(idItem)
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
