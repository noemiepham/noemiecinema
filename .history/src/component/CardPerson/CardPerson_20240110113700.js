import Card from "react-bootstrap/Card";
const CardPerson = ({ data }) => {
  return data?.map((item) => (
    <Card>
      <Card.Title>Name: {item.name}</Card.Title>
    </Card>
  ));
};

export default CardPerson;
