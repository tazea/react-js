import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import "./ItemListContainer.css";
import { getFirestore } from "../getFirestore/getFirestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    const itemsCategoryCollection = itemsCollection.where("category", "==", categoryId);

    if (categoryId === "todos") {
      itemsCollection
        .get()
        .then((resp) => {
          setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
        })
        .catch((error) => console.log("error"))
        .finally(() => setLoading(false));
      console.log(products);
    } else {
      itemsCategoryCollection
        .get()
        .then((resp) => {
          setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
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
        <div>
          {categoryId === "todos" ? (
            <div className="headerText">
              <h1>Products</h1>
              <h3>Here you will find all our products and you will be ready to race!</h3>
            </div>
          ) : (
            <div>
              {categoryId === "pedals" ? (
                <div className="headerText">
                  <h1>Pedals</h1>
                  <h3>The winner ain't the one with the fastest car, it's the one that refuses to lose.</h3>
                </div>
              ) : (
                <div>
                  {categoryId === "shifters" ? (
                    <div className="headerText">
                      <h1>Shifters</h1>
                      <h3>The brave may not live forever. But the cautious never live at all.</h3>
                    </div>
                  ) : (
                    <div>
                      {categoryId === "handbrakes" ? (
                        <div className="headerText">
                          <h1>Handbrakes</h1>
                          <h3>"If you have everything under control, you are not moving fast enough"</h3>
                        </div>
                      ) : (
                        <h1>-</h1>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <ItemList product={products} />
        </div>
      )}
    </div>
  );
};
export default ItemListContainer;
