import "../styles/itemDetails.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ prod, onAdd }) => {
  const [buyState, setBuyState] = useState(false);

  const handlerOnAdd = (prod) => {
    onAdd(prod);
    setBuyState(true);
  };

  return (
    <Container>
      <Row xs="auto">
        <div className="descContainer">
          <Col className="descImg" sm={8}>
            <img className="" src={'../assets/'+ prod.image} alt={prod.title} />
          </Col>
          <Col className="descText" sm={{ span: 3, offset: 1 }}>
            <h5 className="descTitle">{prod.title}</h5>
            <p className="descDesc">{prod.desc}</p>
            <p className="descPrice">$ {prod.price}</p>
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
              <button onClick={() => handlerOnAdd(prod)}>Add to Cart</button>
            )}
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default ItemDetail;
