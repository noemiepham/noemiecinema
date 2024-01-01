import "./App.css";
import Layout from "./pages/Layout/Layout";
import Details from "./pages/Details/Details";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Anime from "./pages/Anime/Anime";
import TVShows from "./pages/TVShows/TVShows";
import AllFilms from "./pages/AllFilms/AllFilms";
import SearchPages from "./pages/SearchPages/SearchPages";
import { useEffect, useState } from "react";
import Trailer from "./component/Trailer/Trailer";
import userContext from "./component/userContext.js/userContext";

function App() {
  const [genres, setGenres] = useState([]);

  const token = process.env.REACT_APP_API_TOKEN;
  //console.log("detail", params.id);
  useEffect(() => {
    const fetch = require("node-fetch");
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setGenres(json))
      .catch((err) => console.error("error:" + err));
  }, [token]);
  console.log("genres", genres);
  return (
    // Providing the context
    <userContext.Provider value={genres.genres ? genres.genres : []}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="anime" element={<Anime />} />
            <Route path="tvshows" element={<TVShows />} />
            <Route path="details/:id" element={<Details />} />
            <Route
              path="allfilms/details/:id"
              element={<Details gns={genres} />}
            />
            <Route
              path="search/details/:id"
              element={<Details gns={genres} />}
            />
            <Route path="/allfilms" element={<AllFilms />} />
            <Route path="/search" element={<SearchPages />} />
            <Route path="details/:id/trailer" element={<Trailer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
