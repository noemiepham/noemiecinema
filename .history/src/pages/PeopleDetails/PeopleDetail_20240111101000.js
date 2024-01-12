import { useEffect, useState } from "react";
import CardPerson from "../../component/CardPerson/CardPerson";
import "./People.css";
import { Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
/* import genresFunction from "../Function/filterGenres";
 */
function PeopleDetails() {
  const token = process.env.REACT_APP_API_TOKEN;
  const [data, setData] = useState([]);
  const params = useParams();
  console.log("detail", params.id);
  useEffect(() => {
    const fetch = require("node-fetch");
    const url = `https://api.themoviedb.org/3/person/${params.id}?language=en-US`;
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
  }, [token, params]);

  return <Container className="people"></Container>;
}
export default PeopleDetails;
