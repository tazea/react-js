import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import GetFetchList from "./GetFetchList";
import Spinner from "react-bootstrap/Spinner";
import "../styles/styles.css";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFetchList.then((response) => {
      setProduct(response);
    })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="ItemList">
      {loading ? (
        <div className="loadingScreen">
          <Spinner animation="border" />
        </div>
      ) : (
        <ItemList product={product} />
      )}
    </div>
  );
};
export default ItemListContainer;
