import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
const CardPerson = ({ data }) => {
  return data?.map((item) => (
    <Col sm={4} lg={3} key={item.id}>
      <Card.Img
        variant="top"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.profile_path}`}
      />
      <Card.Body>
        <Card.Title style={{ color: "white" }}>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Col>
  ));
};

export default CardPerson;
