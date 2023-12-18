//import CardFilms from "../../component/CardFilm/CardFilms";
import "./AllFilms.css";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/UpdateFilmSection/UpdateFilmSection.css";
import genresFunction from "../../component/filterGenres";
import { Row, Col, Dropdown } from "react-bootstrap";

const AllFilms = ({ genres }) => {
  /* Tabs content menu to filter */
  const tabsValue = [
    { id: 1, text: "All genres", menu: ["All films"] },
    { id: 2, text: "Language", menu: ["En", "Ja", "Fr", "Sp", "Other"] },
    { id: 3, text: "Any rating", menu: ["from 5.0", "from 7.0", "from 8.0"] },
    { id: 4, text: "Relevance", menu: ["2021", "2022", "2023"] },
  ];
  const [activeItem, setActive] = useState("");
  const [data, setData] = useState([]);
  //const apiKey = "6a973be32b86f3ac7884bc3edb007e6a";
  // Replace with your actual API key from The Movie Database (TMDb)
  /*   const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk3M2JlMzJiODZmM2FjNzg4NGJjM2VkYjAwN2U2YSIsInN1YiI6IjY1N2FkNjEyZWM4YTQzMDExYTNiNWJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNZI1WkeIVJ1Nx2AoCXDWFn-yZzKyErXcDQbMc4E2Bs"; */

  useEffect(() => {
    const fetch = require("node-fetch");

    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk3M2JlMzJiODZmM2FjNzg4NGJjM2VkYjAwN2U2YSIsInN1YiI6IjY1N2FkNjEyZWM4YTQzMDExYTNiNWJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNZI1WkeIVJ1Nx2AoCXDWFn-yZzKyErXcDQbMc4E2Bs",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((movies) => setData(movies.results))
      .catch((err) => console.error("error:" + err));
    console.log(data);
  });
  return (
    <div className="allFilms">
      <div className="contentTitleUpdate">
        <Container>
          <Row className="row ">
            <Col sm={8}>
              <h2 className="bigTitle">Show All Films</h2>
              <ul className="contentTabs">
                {tabsValue.map((item) => (
                  <li
                    onClick={() => setActive(item.id)}
                    className={item.id === activeItem ? "tabsActive" : ""}
                  >
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {item.text}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        item.menu.forEach(element =>{" "}
                        {
                          <Dropdown.Item
                            className="dropTabs"
                            href={`#/${item.menu}`}
                          >
                            {item.menu}
                          </Dropdown.Item>
                        }
                        );
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div>
          {data &&
            data.map((item) => (
              <div
                className="cardFilms"
                key={item.id}
                onClick={() => navigator("details/" + item.id)}
              >
                <div className="card-image">
                  <div className="cover-image">
                    <img
                      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
                      alt={item.title}
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
                </div>
                <div className="card-content">
                  <div className="cardTitle">
                    <h3> {item.title}</h3>
                  </div>
                  <div className="genres">
                    {genresFunction(item.genre_ids, genres).map((item) => (
                      <span key={item}>
                        {item}
                        {","}
                      </span>
                    ))}
                  </div>
                  <span className="cardRate">⭐️ {item.vote_average}</span>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};
export default AllFilms;
