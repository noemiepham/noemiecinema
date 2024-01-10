import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const CardPerson = ({ data }) => {
  return data?.map((item) => (
    <Container>
      <div className="person">
        <h2>People</h2>
        <Card>
          <Card.Title>Name: {item.name}</Card.Title>
        </Card>
      </div>
    </Container>
  ));
};

export default CardPerson;
