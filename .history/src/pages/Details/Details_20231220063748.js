import React, { useEffect, useState } from "react";
import "./details.css";
import { Col, Container, Row } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/NewFilmSection/NewFilmSection.css";
import "./details.css";
import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
  const [data, setData] = useState("");
  console.log("detail", params.id);

  //const apiKey = "6a973be32b86f3ac7884bc3edb007e6a";
  // Replace with your actual API key from The Movie Database (TMDb)
  /*  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk3M2JlMzJiODZmM2FjNzg4NGJjM2VkYjAwN2U2YSIsInN1YiI6IjY1N2FkNjEyZWM4YTQzMDExYTNiNWJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNZI1WkeIVJ1Nx2AoCXDWFn-yZzKyErXcDQbMc4E2Bs";
 */
  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=6a973be32b86f3ac7884bc3edb007e6a&language=fr-FR`
      );
      const responseApi = await response.json();
      setData(responseApi);
    };
    fetchtheData();
  }, [params.id]);
  return (
    <div>
      <div className="sectionDetail">
        <Container>
          <Row className="r1">
            <h1 className="bigTitle">{data.title}</h1>
          </Row>
          <Row className="r2">
            <Col className="r2-c1" sm="12" lg="6">
              <Row className="up">
                <Col lg="4" sm="6" xs="12" className="left">
                  <img
                    className="cover-image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${data.poster_path}`}
                    alt={data.title}
                  />
                </Col>
                <Col lg="8" sm="6" xs="12" className="card-body">
                  <div>
                    <span>⭐️ 8.4</span>
                    <span>FULL HD</span>
                    <span> 16+</span>
                  </div>
                  <ul>
                    <li>
                      {" "}
                      <span>Genre:</span> {data.genre_ids}
                    </li>
                    <li>
                      <span>Original_language:</span>
                      {data.original_language}
                    </li>
                    <li>Country: USA</li>
                    <li>Premiere: 05.02.2023</li>
                  </ul>
                  <ul>
                    <li>Director: Louis Leterrier</li>
                    <li>Actors: Son Gun Michelle Rodriguez Jordana Brewster</li>
                  </ul>
                </Col>
              </Row>
              <Row className="scrollContent">{data.overview}</Row>
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
      <div className="simila"></div>
    </div>
  );
}

export default Details;
