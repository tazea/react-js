import Item from "../Item/Item";
import "../Item/Item.css";
import { Container, Row, Col } from "react-bootstrap";

const ItemList = ({ product }) => {
  return (
    <Container>
      <Row className="productContainer">
        <div >
          {product.map((prod) => (
            <Item key={prod.id} prod={prod} />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default ItemList;