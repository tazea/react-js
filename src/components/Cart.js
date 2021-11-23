import { useCartContext } from "./CartContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/cart.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {getFirestore} from './getFirestore'

const Cart = () => {
  const { cartItems, onAdd, onDecrease, onRemove, total } = useCartContext();
  const [formData, setformData] = useState({
    name: '',
    phone: '',
    email: '',
    city: ''
  })

  const createOrder = (e) =>{
    e.preventDefault()

    let order = {}

    order.buyer = {name: 'Gasti', phone: '344652610', email: 'gasti@gmail.com', city: 'Cordoba'}
    order.total = total;
    order.items = cartItems.map(cartItem => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price * cartItem.qty;

      return {id, title, price}
    })

    const dbQuery = getFirestore()
    dbQuery.collection('orders').add(order)
    .then(resp => console.log(resp))
  }

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
                    <img className="" height="250px" src={'../assets/'+ item.image} alt={item.title} />
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
            <Col>
              <form onSubmit={createOrder}>
                <input type='text' name='name' placeholder='Name'/>
                <input type='text' name='phone' placeholder='Phone'/>
                <input type='email' name='email' placeholder='Email'/>
                <input type='text' name='city' placeholder='City'/>
                <button>Checkout</button>
              </form>
            </Col>
          </div>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
