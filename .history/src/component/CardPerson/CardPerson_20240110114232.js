import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
const CardPerson = ({ data }) => {
  return data?.map((item) => (
    <Col sm={4} lg={3} key={item.id}>
      <Card.Title>Name: {item.name}</Card.Title>
    </Col>
  ));
};

export default CardPerson;
