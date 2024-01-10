import "./UpdateFilmSection.css";
import { useState, useEffect } from "react";
import CardUpdate from "../CardUpdate/CardUpdate";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UpdateFilmSection({ genres, numItemShow }) {
  /* Navigater for All films catalog */
  const navigate = useNavigate();
  /* Tabs content menu to filter */
  const tabsValue = [
    { id: 1, text: "New Items", value: "newitems" },
    { id: 2, text: "Movies", value: "movies" },
    { id: 3, text: "Tv Show", value: "tvishow" },
    { id: 4, text: "All", value: "all" },
  ];

  const [activeItem, setActive] = useState(1);

  const handleClick = (item) => {
    setActive(item);
    navigate("all");
  };
  /* useState for API updateFilms */
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&query=$bond&page=1"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };
    fetchtheData();
  }, []);
  return (
    <div className="contentUpdate">
      <div className="contentTitleUpdate">
        <Container>
          <Row className="row ">
            <Col sm={8}>
              <h2 className="bigTitle">
                <b>Recently </b> Update Films
              </h2>
              <ul className="contentTabs">
                {tabsValue.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={item.id === activeItem ? "tabsActive" : ""}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <CardUpdate
            data={data.results}
            genres={genres}
            numItemShow={numItemShow}
          />
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-success tocatalog"
              onClick={() => navigate("AllFilms")}
            >
              <span>Show All Films</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UpdateFilmSection;
