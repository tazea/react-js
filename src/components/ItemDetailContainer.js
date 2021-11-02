import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import GetItem from "./GetItem";
import Spinner from "react-bootstrap/Spinner";
import "../styles/styles.css";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    GetItem.then((response) => {
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
        <ItemDetail detail={detail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
