
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import items from "./Data/ImageData";
import data from "./Data/ExtraData";
const App=() => { 
  return (
    <div className="vh-100 bg-dark">
      <Container className="vh-100">
        <header>
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
        <main className="bg-dark">
          <Row xs={1} md={2} className="g-4 bg-dark">
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
                      <ListGroup.Item>Sets x Reps</ListGroup.Item>
                      <ListGroup.Item>Pauze(sec) 30-60</ListGroup.Item>
                      <ListGroup.Item>Gew: 15 tot 25</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="mt-4 mb-4">
              <ListGroup>
                <ListGroup.Item>
                  {" "}
                  !!!!!!!!!!!!!! Extra Mogelijkheden !!!!!!!!!!!!!!!!
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4 bg-dark">
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
                      <ListGroup.Item>Sets x Reps</ListGroup.Item>
                      <ListGroup.Item>Pauze(sec) 30-60</ListGroup.Item>
                      <ListGroup.Item>Gew: 15 tot 25</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </main>
        <footer className="bg-dark">
          <ListGroup className="mt-4 mb-4">
            <ListGroup.Item>Aantal weken: 4</ListGroup.Item>
            <ListGroup.Item className="mb-4">fittness365</ListGroup.Item>
          </ListGroup>
        </footer>
      </Container>
    </div>
  );
}

export default App;
