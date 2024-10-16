
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import items from "./Data/ImageData";
import data from "./Data/ExtraData";
const App=() => { 
  return (
    <div className="vh-100 ">
      <Container className="vh-100 ">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
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
        <header id="Home" className="bg-dark rounded">
          <Row className="mt-4 mb-4">
            <Col>
              <ListGroup className="mt-4 mb-4">
                <ListGroup.Item>Schema: Stefan Nieuwenburg</ListGroup.Item>
                <ListGroup.Item>Doel groep: Kracht sporten</ListGroup.Item>
                <ListGroup.Item>Trainer: Victor</ListGroup.Item>
                <ListGroup.Item>Start date: 2024-07-10</ListGroup.Item>
                <ListGroup.Item>End date: 2024-04-11</ListGroup.Item>
                <ListGroup.Item>Report fittness365 Amsterdam</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </header>
        <main>
          <Row xs={1} md={2} className="g-4 bg-dark rounded ">
            {items.map((item) => (
              <Col key={item.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={item.src} className="w-50" />
                  <Card.Body>
                    <Card.Title className="mb-2 text-muted">
                      {item.title}
                    </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <ListGroup>
                      <ListGroup.Item>Tempo:</ListGroup.Item>
                      <ListGroup.Item>Sets x Reps: 3x12</ListGroup.Item>
                      <ListGroup.Item>Pauze:(sec 30-60)</ListGroup.Item>
                      <ListGroup.Item>Gew: 15 tot 25</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row id="Extra" className="mx-auto bg-dark rounded">
            <Col className="my-4 text-center">
              <ListGroup>
                <ListGroup.Item>
                  <strong>!!!!!! Extra Mogelijkheden !!!!!!!</strong>
                  <ListGroup.Item>
                    <p className="text-bold">just try it</p>
                  </ListGroup.Item>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4 bg-dark rounded">
            {data.map((item) => (
              <Col key={item.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={item.src} className="w-50" />
                  <Card.Body>
                    <Card.Title className="mb-2 text-muted">
                      {item.title}
                    </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <ListGroup>
                      <ListGroup.Item>Tempo:</ListGroup.Item>
                      <ListGroup.Item>Sets x Reps: 3x12</ListGroup.Item>
                      <ListGroup.Item>Pauze: (sec 30-60)</ListGroup.Item>
                      <ListGroup.Item>Gew: 15 tot 25</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </main>
        <footer id="Contact">
          <ListGroup className="mt-4 mb-4 bg-dark rounded">
            <ListGroup.Item>Aantal weken:4</ListGroup.Item>
            <ListGroup.Item>Tel:085 487 1920</ListGroup.Item>
            <ListGroup.Item className="mb-4">fittness365</ListGroup.Item>
          </ListGroup>
        </footer>
      </Container>
    </div>
  );
}

export default App;
