import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const onAdd = (prod) => {
    const isInCart = cartItems.find((item) => item.id === prod.id);
    if (isInCart) {
      isInCart.qty += 1;
      setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, { ...prod, qty: 1 }]);
    }
    updatePrice();
  };

  const onDecrease = (prod) => {
    const isInCart = cartItems.find((item) => item.id === prod.id);
    if (isInCart.qty > 1) {
      isInCart.qty -= 1;
    }
    updatePrice();
  };

  const onRemove = (prod) => {
    setCartItems(cartItems.filter((item) => item.id !== prod.id));
    updatePrice();
  };

  const updatePrice = () => {
    for (const item of cartItems) {
      setTotal(total + (item.price * item.qty));
    }
    console.log(total);
  };

  return (
    <CartContext.Provider value={{ cartItems, onAdd, onDecrease, onRemove, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
