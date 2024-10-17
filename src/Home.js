import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import items from "./Data/ImageData";
import Image from "../src/Data/image/CrossTrainer.png";
const Home = () => {
    return (
      <div className=" " id="Home">
        <header id="Home" className="bg-dark rounded">
          <Row className="mt-4 mb-4">
            <Col>
              <Container>
                <ListGroup className="mt-4 mb-4">
                  <ListGroup.Item>Schema: Stefan Nieuwenburg</ListGroup.Item>
                  <ListGroup.Item>Doel groep: Kracht sporten</ListGroup.Item>
                  <ListGroup.Item>Trainer: Victor</ListGroup.Item>
                  <ListGroup.Item>Start date: 2024-07-10</ListGroup.Item>
                  <ListGroup.Item>End date: 2024-04-11</ListGroup.Item>
                  <ListGroup.Item>Report fittness365 Amsterdam</ListGroup.Item>
                </ListGroup>
              </Container>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            <Col>
              <Container>
                <ListGroup className="mt-4 mb-4">
                  <ListGroup.Item>Starten met de CrossTrainer </ListGroup.Item>
                  <Card>
                    <Card.Img className="w-25 col-4 mx-auto" src={Image} />
                  </Card>
                  <ListGroup.Item>Cardio: CrossTrainer </ListGroup.Item>
                  <ListGroup.Item>Tijd: 10 min</ListGroup.Item>
                  <ListGroup.Item>Tempo: 5-8 </ListGroup.Item>
                </ListGroup>
              </Container>
            </Col>
          </Row>
        </header>
        <main>
          <Row xs={1} md={2} className="g-4 px-4 bg-dark rounded ">
            {items.map((item) => (
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
                      <ListGroup.Item>Pauze:(sec 30-60)</ListGroup.Item>
                      <ListGroup.Item>Gew: 20 tot 35</ListGroup.Item>
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

export default Home

