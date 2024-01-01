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
    // Providing the context
    <userContext.Provider value={genres}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="anime" element={<Anime />} />
            <Route path="tvshows" element={<TVShows />} />
            <Route path="details/:id" element={<Details genres={genres} />} />
            <Route
              path="allfilms/details/:id"
              element={<Details gns={genres} />}
            />
            <Route
              path="search/details/:id"
              element={<Details gns={genres} />}
            />
            <Route path="/allfilms" element={<AllFilms genres={genres} />} />
            <Route path="/search" element={<SearchPages genres={genres} />} />
            <Route path="details/:id/trailer" element={<Trailer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
