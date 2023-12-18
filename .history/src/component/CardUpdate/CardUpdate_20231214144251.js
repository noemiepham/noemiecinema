import "./cardUpdate.css";
import "../CardFilm/cardFilms.css";
import { Col } from "react-bootstrap";
import genresFunction from "../filterGenres";
import { useNavigate } from "react-router-dom";

function CardUpdate({ data, genres }) {
  const navigator = useNavigate();
  console.log("cardNew", genres);
  return (
    data &&
    data.map((item) => (
      //class="col-6 col-sm-12 col-lg-6 col-xxl-4"
      <Col xs={12} key={item.id}>
        <div
          className="cardfilm"
          onClick={() => navigator("details/" + item.id)}
        >
          <div className=" cover-image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt="troll"
            />
          </div>
          <div className="card-body">
            <h3 className="titleFilms"> {item.title}</h3>
            <div className="responsive">
              <span>⭐️ {item.vote_average}</span>
              <span className="category">{item.original_language}</span>
            </div>
            <div>
              <span>
                {genresFunction(item.genre_ids, genres).map((item) => (
                  <span className="genres" key={item}>
                    {item}
                  </span>
                ))}
              </span>
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
