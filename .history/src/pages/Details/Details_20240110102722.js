import React, { useEffect, useState } from "react";
import "./details.css";
import { Col, Container, Row } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/NewFilmSection/NewFilmSection.css";
import "./details.css";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Similar from "../../component/SimilarFilms/SimilarFilms";
import Trailer from "../../component/Trailer/Trailer";

function Details() {
  const token = process.env.REACT_APP_API_TOKEN;
  const params = useParams();
  const [data, setData] = useState("");
  const [popUp, setPopUp] = useState(false);
  //console.log("detail", params.id);

  useEffect(() => {
    const fetch = require("node-fetch");
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
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
    <div>
      <div className="sectionDetail">
        <Container>
          <Row className="row">
            <h3 className="mediumTitle">{data.title}</h3>
          </Row>
          <Row className="r2">
            <Col key={data.id} sm="12" lg="6">
              <div className="cardUpdate">
                <div className="cover-image">
                  <img
                    src={
                      params.id
                        ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                        : ""
                    }
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
                            <span key={uuidv4()}>{item.name}</span>
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
                            <span key={uuidv4()}>
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
            <Col
              sm="12"
              lg="6"
              bg="success"
              className="trailer"
              onClick={() => setPopUp(true)}
            >
              popUp ? (
              <div className="display-video">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                  alt={data.title}
                />
                <span className="item-play">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                  </svg>
                </span>
              </div>
              ) : (
              <div className="display-video">
                <Trailer />
              </div>
              )
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="similarFilms">
        <Row className="row">
          <h3 className="mediumTitle">
            {" "}
            Similar Films of <span style={{ color: "red" }}>
              {data.title}
            </span>{" "}
          </h3>
        </Row>
        <Similar />
      </Container>
    </div>
  );
}

export default Details;
