import "./UpdateFilmSection.css";
import { useState, useEffect } from "react";
import CardUpdate from "../CardUpdate/CardUpdate";
import { Row } from "react-bootstrap";

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
    <section className="content">
      <div className="content-head">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="bigTitle">
                <b>Recently </b> Update Films
              </h1>
              <ul>
                <li>New Items</li>
                <li>Movies</li>
                <li>Tv Show</li>
                <li>Anime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>

      <Row className="listFilms">
        {/*   <CardUpdate data={data.results} genres={genres} /> */}
      </Row>
    </section>
  );
}

export default UpdateFilmSection;
