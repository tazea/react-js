import { Navbar, Nav } from "react-bootstrap";
import CartWidjet from "../components/CartWidjet";
import logo from "../logo.png";

const NavBar = () => {
  //Logic Development
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src={logo} height="50px" alt="Podium" />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
        <Nav.Link href="/support">Support</Nav.Link>
        <Nav.Link href="/cart">
          <CartWidjet />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
