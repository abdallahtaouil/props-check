import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
function player(props) {
  return (
    <Col md={3} sm={6} className="mb-3 ">
      <Card className="text-center">
        <Card.Img variant="top" src={props.user.image} height={250} />
        <Card.Body className="text-center">
          <Card.Title>{props.user.name}</Card.Title>
          <Card.Text>{props.user.team}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.user.nationality}</ListGroup.Item>
          <ListGroup.Item>{props.user.jerseyNumber}</ListGroup.Item>
          <ListGroup.Item>{props.user.age}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
}

export default player;
