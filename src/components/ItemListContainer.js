import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import GetFetchList from "./GetFetchList";
import Spinner from "react-bootstrap/Spinner";
import "../styles/styles.css";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if(categoryId === "todos"){
      GetFetchList.then((response) => {
        setProduct(response);
      })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
    else{
      GetFetchList.then((response) => {
        setProduct(response.filter((prod) => prod.category === categoryId));
      })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
    console.log(categoryId)
  }, [categoryId]);

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
