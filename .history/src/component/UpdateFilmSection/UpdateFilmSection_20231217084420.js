import "./UpdateFilmSection.css";
import { useState, useEffect } from "react";
import CardUpdate from "../CardUpdate/CardUpdate";
import { Container, Row, Col } from "react-bootstrap";

function UpdateFilmSection({ genres }) {
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
    <section className="contentUpdate">
      <Container className="content-head" fluid>
        <Row className="row ">
          <Col sm={8}>
            <h2 className="bigTitle">
              <b>Recently </b> Update Films
            </h2>
            <ul className="contentTabs">
              <li>New Items</li>
              <li>Movies</li>
              <li>Tv Show</li>
              <li>Anime</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <CardUpdate data={data.results} genres={genres} />
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <button type="button" className="btn btn-outline-success tocatalog">
              <span>To CATALOG</span>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default UpdateFilmSection;
