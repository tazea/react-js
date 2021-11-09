import "../styles/itemDetails.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCount from "./ItemCount";

const ItemDetail = ({ prod }) => {
  const [count, setCount] = useState(1)
  const onAdd = (val) => {
    setCount(val);
    console.log(count)
  };

  return (
    <Container>
      <Row xs="auto">
        <div className="descContainer">
            <Col className="descImg" sm={8}>
              <img className="" src={prod.img} alt={prod.title} />
            </Col>
            <Col className="descText" sm={{ span: 3, offset: 1 }}>
              <h5 className="descTitle">{prod.title}</h5>
              <p className="descDesc">{prod.desc}</p>
              <p className="descPrice">$ {prod.price}</p>
              <ItemCount initial={1} onAdd={onAdd} stock={prod.stock} />
            </Col>
        </div>
      </Row>
    </Container>
  );
};

export default ItemDetail;
