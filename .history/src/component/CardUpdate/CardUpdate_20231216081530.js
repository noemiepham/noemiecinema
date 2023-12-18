import "./cardUpdate.css";
import "../CardFilm/cardFilms.css";
import { Col, Row } from "react-bootstrap";
import genresFunction from "../filterGenres";
import { useNavigate } from "react-router-dom";

function CardUpdate({ data, genres }) {
  const navigator = useNavigate();
  console.log("cardNew", genres);
  return (
    data &&
    data.map((item) => (
      <Col key={item.id} lg={4} md="6" sm={12}>
        <div
          className="cardUpdate"
          onClick={() => navigator("details/" + item.id)}
        >
          <div className="cover-image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt="troll"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title"> {item.original_title}</h3>
            <div className="genres">
              <span>
                {genresFunction(item.genre_ids, genres).map((item) => (
                  <span key={item}>
                    {item}
                    {","}
                  </span>
                ))}
              </span>
            </div>
            <div className="responsive">
              <span className="cardRate">⭐️ {item.vote_average}</span>
              <span className="category">{item.original_language}</span>
            </div>

            <div>
              <span>
                Release_date:
                <span className="listCategory"> {item.release_date}</span>
              </span>
            </div>

            <div className="overview">
              <span>
                Overview:
                <span className="listCategory"> {item.overview}</span>
              </span>
            </div>
          </div>
        </div>
      </Col>
    ))
  );
}

export default CardUpdate;
