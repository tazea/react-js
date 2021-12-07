import "./ItemDetails.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
          <Col className="descImg" sm={6}>
            <img className="" src={'../assets/ProductsImage/'+ prod.image} alt={prod.title} />
          </Col>
          <Col className="descText" sm={3}>
            <h5 className="descTitle">{prod.title}</h5>
            <p className="descDesc">{prod.description}</p>
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
