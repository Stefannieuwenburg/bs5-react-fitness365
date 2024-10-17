import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import data from "./Data/ExtraData";


const Extra = () => { 
return (
  <div className=" " id="Extra">
    <main>
      <Row id="Extra" className="mx-auto  bg-dark rounded">
        <Col className="my-4 text-center">
          <Container>
            <ListGroup>
              <ListGroup.Item>
                <strong> Extra Mogelijkheden </strong>
                <ListGroup.Item>
                  <p className="text-bold">na 4 weeken op pakken</p>
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </Container>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 px-4 bg-dark rounded">
        {data.map((item) => (
          <Col key={item.id}>
            <Card className="mb-4 px-2">
              <Card.Img
                variant="top"
                src={item.src}
                className="w-50 col-4 mx-auto"
              />
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
  </div>
);
}
export default Extra