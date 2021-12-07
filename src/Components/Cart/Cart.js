import { useCartContext } from "../CartContext/CartContext";
import CartEmpty from "../CartEmpty/CartEmpty";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getFirestore } from "../getFirestore/getFirestore";
import { BsCheckCircleFill } from "react-icons/bs";

const Cart = () => {
  const { cartItems, onAdd, onDecrease, onRemove, total } = useCartContext();
  const [formData, setformData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const createOrder = (e) => {
    e.preventDefault();

    let order = {};

    order.buyer = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      city: e.target.city.value,
    };
    order.total = total;
    order.items = cartItems.map((cartItem) => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price * cartItem.qty;

      return { id, title, price };
    });

    const dbQuery = getFirestore();
    dbQuery
      .collection("orders")
      .add(order)
      .then((resp) => console.log(resp));
  };

  return (
    <div>
      <Container>
        {cartItems.length === 0 ? (
          <CartEmpty />
        ) : (
          <Row>
            <div>
              {cartItems.map((item) => (
                <div className="cartContainer">
                  <Row className="itemContainer">
                    <Col xs={3}>
                      <img
                        className=""
                        height="250px"
                        src={"../assets/ProductsImage/" + item.image}
                        alt={item.title}
                      />
                    </Col>
                    <Col xs={6}>
                      <h1>{item.title}</h1>
                      <p>Price: {item.price}</p>
                      <p>SKU: {item.id}</p>
                    </Col>
                    <Col>
                      <div className="cartQty">
                        <Link to="/cart">
                          <button onClick={() => onDecrease(item)}>-</button>
                        </Link>
                        <h1 className="cartQtyNumber">{item.qty}</h1>
                        <Link to="/cart">
                          <button onClick={() => onAdd(item)}>+</button>
                        </Link>
                      </div>
                    </Col>
                    <Col>
                      <Link to="/cart">
                        <button onClick={() => onRemove(item)}>X</button>
                      </Link>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
            <div>
              <Col xs={{ span: 2, offset: 10 }}>
                <h3>Total: {total}</h3>
              </Col>
              <Col>
                <div className="cartForm">
                  <form onSubmit={createOrder}>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="phone" placeholder="Phone" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="text" name="city" placeholder="City" />
                    <button onClick={togglePopUp}>Checkout</button>
                  </form>
                </div>
              </Col>
            </div>
          </Row>
        )}
      </Container>
      {isOpen ? (
        <div className="popUp">
          <span className="close-icon" onClick={togglePopUp}>x</span>
          <BsCheckCircleFill size={"8rem"} color={"rgb(70, 177, 127)"} />
          <h3>Order completed!</h3>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
