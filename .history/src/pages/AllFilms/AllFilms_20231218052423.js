import CardFilms from "../../component/CardFilm/CardFilms";
import "./AllFilms.css";
import { useEffect, useState } from "react";

const AllFilms = () => {
  const [movies, setMovies] = useState([]);
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
      .then((data) => console.log(data.results))
      .catch((err) => console.error("error:" + err));
  });
  return (
    <div className="allFilmSection">
      <CardFilms data={movies.results} genres={movies.genre_ids} />
    </div>
  );
};
export default AllFilms;
