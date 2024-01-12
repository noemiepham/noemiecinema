import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./People.css";

const CardPerson = ({ data }) => {
  const token = process.env.REACT_APP_API_TOKEN;
  const [dataDetail, setDataDetail] = useState([]);
  //console.log("detail", params.id);
  useEffect(() => {
    const fetch = require("node-fetch");
    const url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("error:" + err));
  }, [token]);

  return data?.map((item) => (
    <Col sm={4} lg={3} key={item.id}>
      <Card.Img
        variant="top"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.profile_path}`}
      />
      <Card.Body>
        <Card.Title style={{ color: "white" }}>{item.name}</Card.Title>
        <Card.Text style={{ color: "white" }}>Show more details</Card.Text>
      </Card.Body>
    </Col>
  ));
};

export default CardPerson;
