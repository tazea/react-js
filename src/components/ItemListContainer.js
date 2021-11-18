import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "react-bootstrap/Spinner";
import "../styles/styles.css";
import { getFirestore } from "./getFirestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items")
    const itemsCategoryCollection = itemsCollection.where('category', '==', categoryId);

    if (categoryId === "todos") {
      itemsCollection.get()
        .then((resp) => {
          setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()})));
        })
        .catch((error) => console.log("error"))
        .finally(() => setLoading(false));
      console.log(products);
    } else {
      itemsCategoryCollection.get()
        .then((resp) => {
          setProducts(resp.docs.map(prod =>  ({id: prod.id, ...prod.data()})));
        })
        .catch((error) => console.log("error"))
        .finally(() => setLoading(false));
      console.log(products);
    }
  }, [categoryId]);

  return (
    <div className="ItemList">
      {loading ? (
        <div className="loadingScreen">
          <Spinner animation="border" />
        </div>
      ) : (
        <ItemList product={products} />
      )}
    </div>
  );
};
export default ItemListContainer;
