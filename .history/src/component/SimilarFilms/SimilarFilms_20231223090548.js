import React, { useEffect, useState } from "react";
import "./details.css";
import { Col, Container, Row } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/NewFilmSection/NewFilmSection.css";
import "./details.css";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CardFilms from "../../component/CardFilm/CardFilms";

//import CardFilms from "../../component/CardFilm/CardFilms";
//import CardUpdate from "../../component/CardUpdate/CardUpdate";
//import genresFunction from "../../component/Function/filterGenres";

function Similar() {
  const token = process.env.REACT_APP_API_TOKEN;
  const params = useParams();
  const [data, setData] = useState("");
  console.log("detail", params.id);
  //console.log(REACT_APP_API_TOKEN);

  useEffect(() => {
    const fetch = require("node-fetch");

    const url = `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1`;
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
  }, [params.id, token]);
  // console.log("test1", data);
  return (
    <div className="similarFilms">
      <CardFilms data={data} />
    </div>
  );
}

export default Similar;
