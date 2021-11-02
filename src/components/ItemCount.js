import { useState } from "react";
import "../styles/styles.css";

const ItemCount = ({ initial, stock, title }) => {
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

  const onAdd = () => {
    const message = `Agregaste ${qty} producto`;
    if (stock !== 0) {
      qty === 1 ? alert(message) : alert(message + `s`);
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <div>
        <div className="itemCounter">
          <div className="counter">
            <button onClick={onDecrease}>-</button>
            <h3>{qty}</h3>
            <button onClick={onIncrease}>+</button>
          </div>
          <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
