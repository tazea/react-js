import { BsCart } from "react-icons/bs"
import "./CartWidjet.css";
import { useCartContext } from "../CartContext/CartContext";


const CartWidjet = () => {
  const { cartItems } = useCartContext();
  const cartItemsCount = cartItems.length

    return (
      <div className="cartIcon cartWidjet" >
          <span> {cartItemsCount} </span>
          <BsCart size={"1.5rem"}/>
      </div>
    );
  };
  export default CartWidjet;