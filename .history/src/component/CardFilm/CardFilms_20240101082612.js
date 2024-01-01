import { useNavigate } from "react-router-dom";
import "./cardFilms.css";
import genresFunction from "../Function/filterGenres";
import { userContext } from "../userContext.js/userContext";

function CardFilms({ data, numItemShow }) {
  //console.log("CardFilms", genres);
  //const numItemShow = 12;
  const navigator = useNavigate();
  return (
    data &&
    data.slice(0, numItemShow).map((item) => (
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
    ))
  );
}
export default CardFilms;
