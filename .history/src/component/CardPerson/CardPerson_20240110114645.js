import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
const CardPerson = ({ data }) => {
  const detail = data.known_for;

  return data?.map((item) => (
    <Col sm={4} lg={3} key={item.id}>
      <Card.Title style={{ color: "white" }}>{item.name}</Card.Title>
      <Card.Img
        variant="top"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.profile_path}`}
      />
    </Col>
  ));
};

export default CardPerson;
