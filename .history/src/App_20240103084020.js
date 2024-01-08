import "./App.css";
import Layout from "./pages/Layout/Layout";
import Details from "./pages/Details/Details";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TVShows from "./pages/TVShows/TVShows";
import AllFilms from "./pages/AllFilms/AllFilms";
import SearchPages from "./pages/SearchPages/SearchPages";
import { createContext, useEffect, useState } from "react";
import Trailer from "./component/Trailer/Trailer";
import dataContext from "./component/useContext.js/dataContext";
import Selected from "./pages/Selected/Selected";

function App() {
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);

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
  //console.log("genres", genres);

  /* list languages */
  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://api.themoviedb.org/3/configuration/primary_translations";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            // Add your API key to the Authorization header
            Authorization: `Bearer ${token}`,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);
  console.log("lg", languages);
  return (
    // Providing the context
    <dataContext.Provider value={genres.genres ? genres.genres : []}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tvshows" element={<TVShows />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="allfilms/details/:id" element={<Details />} />
            <Route path="movies/details/:id" element={<Details />} />
            <Route path="search/details/:id" element={<Details />} />
            <Route path="/allfilms" element={<AllFilms />} />
            <Route path="/search" element={<SearchPages />} />
            <Route path="/selected" element={<Selected />} />
            <Route path="details/:id/trailer" element={<Trailer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
