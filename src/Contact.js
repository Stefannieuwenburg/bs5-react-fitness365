import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const Contact = () => {
  return (
    <div className=" " id="Contact">
      <footer id="Contact">
              <ListGroup className="m-4 bg-dark rounded">
                  <Container>
            <ListGroup.Item> Aantal weken:4 </ListGroup.Item>
            <ListGroup.Item> Tel: 085-4871920 </ListGroup.Item>
                  <ListGroup.Item > fittness365 </ListGroup.Item>
                  </Container>
          </ListGroup>
      </footer>
    </div>
  );
};

export default Contact;
