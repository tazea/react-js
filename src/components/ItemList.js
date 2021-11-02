import Item from "./Item";
import "../styles/cards.css";

const ItemList = ({ product }) => {
  return (
    <div className="productContainer">
      {product.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;