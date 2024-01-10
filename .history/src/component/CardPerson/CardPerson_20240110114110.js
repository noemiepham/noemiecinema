import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
const CardPerson = ({ data }) => {
  return data?.map((item) => (
    <Row>
      <Col sm={4} lg={3} key={item.id}>
        <Card.Title>Name: {item.name}</Card.Title>
      </Col>
    </Row>
  ));
};

export default CardPerson;
