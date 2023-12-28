import "./NewFilmSection.css";
import CardFilms from "../CardFilm/CardFilms";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function NewfilmSection({ genres, numItemShow }) {
  const [data, setData] = useState([]);
  const fetch = require("node-fetch");
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer REACT_APP_API_TOKEN`,
    },
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((err) => console.error("error:" + err));

  return (
    <div className="newFilmSection">
      <Container>
        <h2 className="bigTitle">
          <b>NEW ITEMS </b>OF THIS SEASON
        </h2>
        <div className="listNewFilms">
          <CardFilms data={data.results} genres={genres} />
        </div>
      </Container>
    </div>
  );
}

export default NewfilmSection;
