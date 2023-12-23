import Logo from '../assets/Logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Mynav = () => {
  return(
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={Logo} alt="logo"/></Navbar.Brand>
        <Nav>
          <Nav.Link href="#">HOME</Nav.Link>
          <Nav.Link href="#">ABOUT</Nav.Link>
          <Nav.Link href="#">MENU</Nav.Link>
          <Nav.Link href="#">RESTAURANTS</Nav.Link>
          <Nav.Link href="#">ORDER ONLINE</Nav.Link>
          <Nav.Link href="#">LOGIN</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Mynav;