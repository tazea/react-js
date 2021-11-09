import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);
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
    console.log("Agregaste " + qty + " unidades");
  };

  return (
      <div>
        <div className="itemCounter">
          <div className="counter">
            <button onClick={onDecrease} disabled={qty < 1}> - </button>
            <h3>{qty}</h3>
            <button onClick={onIncrease}>+</button>
          </div>
            <Link to="/cart"><button onClick={() => handlerOnAdd(qty)}>Agregar al Carrito</button></Link>
        </div>
      </div>
  );
};

export default ItemCount;
