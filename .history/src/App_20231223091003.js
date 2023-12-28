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
/* const MoviesList = [
  {
    id: 1,
    list: "popular",
  },
  {
    id: 2,
    list: "now_playing",
  },
  {
    id: 3,
    list: "top_rated",
  },
  {
    id: 3,
    list: "upcoming",
  },
]; */

function App() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=4d12b2b226af3e650897e7b25db29466"
      );
      const responseApi = await response.json();
      setGenres(responseApi?.genres);
    };
    fetchtheData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home genres={genres} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="anime" element={<Anime />} />
          <Route path="tvshows" element={<TVShows />} />
          <Route path="details/:id" element={<Details genres={genres} />} />
          <Route
            path="allfilms/details/:id"
            element={<Details gns={genres} />}
          />
          <Route path="/allfilms" element={<AllFilms genres={genres} />} />
          <Route path="/search" element={<SearchPages genres={genres} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
