import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardFilms from "../../component/CardFilm/CardFilms";
import { Container } from "react-bootstrap";

function Similar({ genres }) {
  const token = process.env.REACT_APP_API_TOKEN;
  const params = useParams();
  const [data, setData] = useState("");
  console.log("detail", params.id);

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
    <Container className="similarFilms">
      <Row className="row">
        <h3 className="mediumTitle">
          {" "}
          Similar Films of <span style={{ color: "red" }}>
            {data.title}
          </span>{" "}
        </h3>
      </Row>
      <CardFilms data={data.results} genres={genres} />
    </Container>
  );
}

export default Similar;
