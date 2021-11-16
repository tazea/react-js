import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidjet from "../components/CartWidjet";
import logo from "../logo.png";
import "../styles/navbar.css";

const NavBar = () => {
  //Logic Development
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className="linkItem" to="/">
          <img src={logo} height="50px" alt="Podium" />
        </Link>
        <Nav className="me-auto">
          <Link to="/" className="linkItem">
            Home
          </Link>
          <Link to="/category/todos" className="linkItem">
            Products
          </Link>
          <Link to="/category/pedals" className="linkItem">
            Pedals
          </Link>
          <Link to="/category/shifters" className="linkItem">
            Shifters
          </Link>
          <Link to="/category/handbrakes" className="linkItem">
            Handbrakes
          </Link>
          <Link to="/support" className="linkItem">
            Support
          </Link>
        </Nav>
        <Nav>
          <Link to="/cart" className="linkItem">
            <CartWidjet />
          </Link>
          <Link to="/cart" className="linkItem">
            Cart
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
