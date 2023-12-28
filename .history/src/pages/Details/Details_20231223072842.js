import React, { useEffect, useState } from "react";
import "./details.css";
import { Col, Container, Row } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/NewFilmSection/NewFilmSection.css";
import "./details.css";
import { useParams } from "react-router-dom";
//import CardFilms from "../../component/CardFilm/CardFilms";
//import CardUpdate from "../../component/CardUpdate/CardUpdate";
//import genresFunction from "../../component/Function/filterGenres";

function Details() {
  const params = useParams();
  const [data, setData] = useState("");
  console.log("detail", params.id);
  console.log(REACT_APP_API_TOKEN);

  useEffect(() => {
    const fetch = require("node-fetch");
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
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
  }, [params.id]);
  // console.log("test1", data);
  return (
    <div>
      <div className="sectionDetail">
        <Container>
          <Row className="row">
            <h2 className="bigTitle">{data.title}</h2>
          </Row>
          <Row className="r2">
            <Col key={data.id} sm="12" lg="6">
              <div className="cardUpdate">
                <div className="cover-image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt="troll"
                  />
                </div>
                <div className="flexDetail">
                  <div>
                    <div className="cardWrap">
                      <span className="cardRate">⭐️ {data.vote_average}</span>
                      <div className="cardCategory">
                        <span>{data.original_language}</span>
                        <span>{data.release_date}</span>
                      </div>
                    </div>
                    <div className="cardDetail">
                      Genre:
                      {data.genres
                        ? data.genres.map((item) => (
                            <span key={item.id}>{item.name}</span>
                          ))
                        : ""}
                    </div>
                    <div className="cardDetail">
                      Runing time: <span>{data.runtime} </span> mins
                    </div>
                    <div className="cardDetail">
                      production_companies
                      {data.production_companies
                        ? data.production_companies.map((item) => (
                            <span>
                              {item.name} {item.origin_country} {","}
                            </span>
                          ))
                        : ""}
                    </div>
                    <div className="cardDetail">
                      Premier: <span>{data.original_language}</span>
                    </div>
                  </div>
                  <div>
                    <div className="cardDetail">
                      Director: <span>{data.original_language}</span>
                    </div>
                    <div className="cardDetail">
                      Actors: <span>{data.original_language}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview">
                <p> {data.overview}</p>
              </div>
            </Col>
            <Col className="r2-c2" sm="12" lg="6" bg="success">
              <div className="trailer-video">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                  alt={data.title}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="similarFilms"></div>
    </div>
  );
}

export default Details;
