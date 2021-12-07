import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import "./CartEmpty.css";

const CartEmpty = () => {
  return (
    <div className="cartEmpty">
      <Link to={`/category/todos`} className="cartIcon">
        <BsCartPlus size={"5rem"} color={"black"}/>
      </Link>
      <div className="cartEmptyText">
          <h3>Looks like your cart is empty! Don't wait so long and start racing right now with our</h3>
          <Link to={`/category/todos`}>
            <h2>Products</h2>
          </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
