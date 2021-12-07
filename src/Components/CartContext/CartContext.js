import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const onAdd = (itemAdded) => {
    const isInCart = cartItems.find((item) => item.id === itemAdded.id);
    if (isInCart) {
      isInCart.qty += 1;
      setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, { ...itemAdded, qty: 1 }]);
    }
    setTotal(itemAdded.price + total)
    /* updatePrice(); */
  };

  const onDecrease = (itemDecrease) => {
    const isInCart = cartItems.find((item) => item.id === itemDecrease.id);
    if (isInCart.qty > 1) {
      isInCart.qty -= 1;
      setCartItems(cartItems);
      setTotal(total - itemDecrease.price)
    }
    /* updatePrice(); */
  };

  const onRemove = (itemRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemRemove.id));
    setTotal(total - (itemRemove.price * itemRemove.qty))
    /* updatePrice(); */
  };
  /* const updatePrice = () => {
    for (const item of cartItems) {
      setTotal(total + (item.price * item.qty));
    }
    console.log(total);
    console.log(cartItems);
  }; */

  return (
    <CartContext.Provider value={{ cartItems, onAdd, onDecrease, onRemove, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
