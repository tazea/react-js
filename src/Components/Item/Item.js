import { Link } from "react-router-dom";
import "./Item.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Item = ({ prod }) => {
  return (
    <Container className="productCardContainer">
        <Row className="productCard">
          <Col xs="7">
            <img className="productImg" src={'../assets/ProductsImage/'+ prod.image} alt={prod.title} />
          </Col>
          <Col>
            <div className="productDesc">
              <h2 className="productTitle">{prod.title}</h2>
              <h4 className="productDrop">{prod.drop}</h4>
              <p className="productDescription">{prod.description}</p>
              <Link to={`/product/${prod.id}`}>
                <button className="productButton">See more</button>
              </Link>
            </div>
          </Col>
        </Row>
    </Container>
  );
};

export default Item;
