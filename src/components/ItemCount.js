/* import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);
  const [buyState, setBuyState] = useState(false);
  console.log(qty);

  const onIncrease = () => {
    const newValue = qty + 1;
    if (newValue <= stock) {
      setQty(newValue);
    }
  };

  const onDecrease = () => {
    const newValue = qty - 1;
    if (initial <= newValue) {
      setQty(newValue);
    }
  };

  const handlerOnAdd = () => {
    onAdd(qty);
    setBuyState(true);
    console.log("Agregaste " + qty + " unidades");
  };

  return (
    <div>
      <div className="itemCounter">
        <div className="counter">
          <button onClick={onDecrease} disabled={qty < 1}>
            {" "}
            -{" "}
          </button>
          <h3>{qty}</h3>
          <button onClick={onIncrease}>+</button>
        </div>
        {buyState ? (
          <div>
            <Link to="/category/todos">
              <button>Search for another</button>
            </Link>
            <Link to="/cart">
              <button>Checkout</button>
            </Link>
          </div>
        ) : (
          <button onClick={() => handlerOnAdd(qty)}>Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default ItemCount; */
