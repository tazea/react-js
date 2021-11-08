import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidjet from "../components/CartWidjet";
import logo from "../logo.png";

const NavBar = () => {
  //Logic Development
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} height="50px" alt="Podium" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/category/todos">Products</Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/category/pedals">Pedals</NavDropdown.Item>
            <NavDropdown.Item href="/category/shifters">Shifters</NavDropdown.Item>
            <NavDropdown.Item href="/category/handbrakes">Handbrakes</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/support">Support</Nav.Link>
          <Nav.Link href="/cart">
            <CartWidjet />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
