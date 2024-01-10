import { useEffect, useState } from "react";
import CardFilms from "../../component/CardFilm/CardFilms";
import CardPerson from "../../component/CardPerson/CardPerson";
import "./People.css";
import { Row, Col, Container } from "react-bootstrap";
/* import genresFunction from "../Function/filterGenres";
 */
function People() {
  const token = process.env.REACT_APP_API_TOKEN;
  const [data, setData] = useState([]);
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

  return (
    <Container className="people">
      Row
      <CardPerson data={data.results} />;
    </Container>
  );
}
export default People;
