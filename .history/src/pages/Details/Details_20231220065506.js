import React, { useEffect, useState } from "react";
import "./details.css";
import { Col, Container, Row } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/NewFilmSection/NewFilmSection.css";
import "./details.css";
import { useParams } from "react-router-dom";
import CardFilms from "../../component/CardFilm/CardFilms";
//import CardUpdate from "../../component/CardUpdate/CardUpdate";
import genresFunction from "../../component/Function/filterGenres";

function Details({ genres }) {
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
          <Row className="row">
            <h1 className="bigTitle">{data.title}</h1>
          </Row>
          <Row className="r2">
            <Col key={data.id} lg={6} sm={12} xl={4}>
              <div className="cardUpdate">
                <div className="cover-image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt="troll"
                  />
                </div>
                <div className="card-content">
                  <div className="cardTitle">
                    <h3> {data.original_title}</h3>
                  </div>
                  <div className="genres">
                    {genresFunction(data.genre_ids, genres).map((item) => (
                      <span key={data}>
                        {data}
                        {","}
                      </span>
                    ))}
                  </div>
                  <div className="cardWrap">
                    <span className="cardRate">⭐️ {data.vote_average}</span>
                    <div className="cardCategory">
                      <span>{data.original_language}</span>
                      <span>{data.release_date}</span>
                    </div>
                  </div>
                </div>
                <div className="overview">
                  <p> {data.overview}</p>
                </div>
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
      <div className="similarFilms">
        <CardFilms />
      </div>
    </div>
  );
}

export default Details;
