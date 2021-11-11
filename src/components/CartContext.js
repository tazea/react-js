import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
  const [cartArray, setCartArray] = useState([]);

  function addToCart(prod) {
    setCartArray([...cartArray, prod]);
    console.log(cartArray)
  }

  return(
      <CartContext.Provider value = {{cartArray, addToCart}}>
          {children}
      </CartContext.Provider>
    )
};

export default CartContextProvider;