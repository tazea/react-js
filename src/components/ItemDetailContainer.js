import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import GetFetchList from "./GetFetchList";
import Spinner from "react-bootstrap/Spinner";
import "../styles/styles.css";
import { useCartContext } from "./CartContext";

const ItemDetailContainer = () => {
  const [prod, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const { onAdd } = useCartContext();

  useEffect(() => {
    GetFetchList.then((response) => {
        setDetail(response.find((prod) => prod.id === productId));
    })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <div className="DetailList">
      {loading ? (
        <div className="loadingScreen">
          <Spinner animation="border" />
        </div>
      ) : (
        <ItemDetail prod={prod} onAdd={onAdd}/>
      )}
    </div>
  );
};

export default ItemDetailContainer;
