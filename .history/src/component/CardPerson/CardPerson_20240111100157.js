import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import "./CardPerson.css";
<img src="" alt="" />;
const CardPerson = ({ data }) => {
  return data?.map((item) => (
    <Col sm={4} lg={3} key={item.id}>
      <div className="card-items" onClick={() => console.log(item.id)}>
        <img
          className="image-person"
          alt={item.name}
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.profile_path}`}
        />
        <div className="card-body">
          <p className="card-title">{item.name}</p>
          {item.known_for.map((item) => (
            <span className="card-text" key={item.}>
              {" "}
              {item.original_title}
              {","}
            </span>
          ))}
        </div>
      </div>
    </Col>
  ));
};

export default CardPerson;
