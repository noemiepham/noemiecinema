import { useEffect, useState } from "react";

function People() {
  const token = process.env.REACT_APP_API_TOKEN;
  const [data, setData] = useState([]);
  //console.log("detail", params.id);
  useEffect(() => {
    const fetch = require("node-fetch");
    const url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=1`;
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
  }, [token]);

  return data?.map((person) => (
    <Col key={item.id} lg={6} sm={12} xl={4}>
      <div>
        <div className="cover-image">
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt="troll"
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
        <div className="card-content">
          <div className="cardTitle">
            <h3> {item.original_title}</h3>
          </div>
          <div className="genres">
            {genresFunction(item.genre_ids, genres).map((item) => (
              <span key={item}>
                {item}
                {","}
              </span>
            ))}
          </div>
          <div className="cardWrap">
            <span className="cardRate">⭐️ {item.vote_average}</span>
            <div className="cardCategory">
              <span>{item.original_language}</span>
              <span>{item.release_date}</span>
            </div>
          </div>
          <div className="overview">
            <p> {item.overview}</p>
          </div>
        </div>
      </div>
    </Col>
  ));
}
export default People;
