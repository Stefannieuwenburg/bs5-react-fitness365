import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavbarComponent = () => {
    return (
<div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">Fitness 365</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#Extra">Extra</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>   
            </Navbar.Collapse>
            </Container>
        </Navbar>
</div>
    )
}

export default NavbarComponent
