import Card from "react-bootstrap/Card";
const CardPerson = ({ data }) => {
  return data?.map((item) => (
    <Row>
      <Col sm={4} lg={3}>
        <Card.Title>Name: {item.name}</Card.Title>
      </Col>
    </Row>
  ));
};

export default CardPerson;
