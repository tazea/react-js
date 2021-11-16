import { useCartContext } from "./CartContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, onAdd, onDecrease, onRemove, total } = useCartContext();
  console.log(cartItems);

  return (
    <Container>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <Row>
          <div>
            {cartItems.map((item) => (
              <div className="cartContainer">
                <Row className="itemContainer">
                  <Col xs={3}>
                    <img className="" height="250px" src={item.img} alt={item.title} />
                  </Col>
                  <Col xs={6}>
                    <h1>{item.title}</h1>
                    <p>Price: {item.price}</p>
                    <p>SKU: {item.id}</p>
                  </Col>
                  <Col>
                    <Link to="/cart">
                      <button onClick={() => onDecrease(item)}>-</button>
                    </Link>
                    <p>{item.qty}</p>
                    <Link to="/cart">
                      <button onClick={() => onAdd(item)}>+</button>
                    </Link>
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
          </div>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
