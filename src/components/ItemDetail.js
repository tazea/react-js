import "../styles/itemDetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detail }) => {
  const onAdd = (valor) => {
    console.log(valor);
  };

  return (
    <Container>
      <Row xs="auto">
        <div className="descContainer">
            <Col className="descImg" sm={8}>
              <img className="" src={detail.img} alt={detail.title} />
            </Col>
            <Col className="descText" sm={{ span: 3, offset: 1 }}>
              <h5 className="descTitle">{detail.title}</h5>
              <p className="descDesc">{detail.desc}</p>
              <p className="descPrice">$ {detail.price}</p>
              <ItemCount initial={1} onAdd={onAdd} stock={detail.stock} />
            </Col>
        </div>
      </Row>
    </Container>
  );
};

export default ItemDetail;
