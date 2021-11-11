import { useCartContext } from "./CartContext";
import Item from "./Item";

const Cart = () => {
  const { cartArray } = useCartContext();

  return (
    <div>
      {cartArray.map((item) => (
        <div>
            <h1>{item.prod.title}</h1>
            <h3>{item.qty}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cart;
