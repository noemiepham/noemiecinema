import "./NewFilmSection.css";
import CardFilms from "../CardFilm/CardFilms";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function NewfilmSection({ numItemShow }) {
  const token = process.env.REACT_APP_API_TOKEN;
  //console.log("NewfilmSection", genres);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = require("node-fetch");
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
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
  // console.log("test1", data);
  return (
    <div className="newFilmSection">
      <Container>
        <h2 className="bigTitle">
          <b>NEW ITEMS </b>OF THIS SEASON
        </h2>
        <div className="listNewFilms">
          <CardFilms data={data.results} />
        </div>
      </Container>
    </div>
  );
}

export default NewfilmSection;
