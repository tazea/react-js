import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "react-bootstrap/Spinner";
import "../styles/styles.css";
import { useCartContext } from "./CartContext";
import { getFirestore } from "./getFirestore";

const ItemDetailContainer = () => {
  const [prod, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const { onAdd } = useCartContext();

  useEffect(() => {
    const db = getFirestore();
    db.collection("items").doc(productId).get()
    .then( resp => setDetail( {id:resp.id, ...resp.data()} ))
    .catch((error) => console.log("error"))
    .finally(() => setLoading(false));

  }, [productId]);

  return (
    <div className="DetailList">
      {loading ? (
        <div className="loadingScreen">
          <Spinner animation="border" />
        </div>
      ) : (
        <ItemDetail prod={prod} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
