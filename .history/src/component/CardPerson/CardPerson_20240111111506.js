import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";
import "./CardPerson.css";

const value = createContext(null);
const CardPerson = ({ data }) => {
  const navigator = useNavigate();
  return data?.map((item) => (
    <Col sm={4} lg={3} key={item.id}>
      <div
        className="card-items"
        onClick={() => navigator("/people/" + item.id)}
      >
        <img
          className="image-person"
          alt={item.name}
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.profile_path}`}
        />
        <div className="card-body">
          <p className="card-title">{item.name}</p>
          {item.known_for.map((item) => (
            <span className="card-text" key={item.id}>
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
