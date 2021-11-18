import { Link } from "react-router-dom";
import "../styles/cards.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Item = ({ prod }) => {
  return (
    <Container>
      <div className="productCard">
        <Row>
          <Col xs="4">
            <img className="productImg" src={'../assets/'+ prod.image} alt={prod.title} />
          </Col>
          <Col>
            <div className="productDesc">
              <h2 className="productTitle">{prod.title}</h2>
              <h3 className="productDrop">{prod.drop}</h3>
              <p className="productPrice">$ {prod.price}</p>
              <Link to={`/product/${prod.id}`}>
                <button className="productButton">Ver mas</button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Item;
