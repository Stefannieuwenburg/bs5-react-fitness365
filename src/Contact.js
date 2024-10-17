import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const Contact = () => {
  return (
    <div className=" " id="Contact">
      <footer id="Contact">
        <Container>
          <ListGroup className="my-4 bg-dark rounded">
            <ListGroup.Item> Aantal weken:4 </ListGroup.Item>
            <ListGroup.Item> Tel: 085-4871920 </ListGroup.Item>
            <ListGroup.Item > fittness365 </ListGroup.Item>
          </ListGroup>
        </Container>
      </footer>
    </div>
  );
};

export default Contact;
