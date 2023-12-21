import "./App.css";
import Layout from "./pages/Layout/Layout";
import Details from "./pages/Details/Details";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import Anime from "./pages/Anime/Anime";
import Cartoons from "./pages/Cartoons/Cartoons";
import AllFilms from "./pages/AllFilms/AllFilms";
import { useEffect, useState } from "react";

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
  // console.log(genres);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home genres={genres} />} />
          <Route path="films" element={<Films />} />
          <Route path="anime" element={<Anime />} />
          <Route path="cartoon" element={<Cartoons />} />
          <Route path="AllFilms/details/:id" element={<Details />} />
          <Route path="AllFilms" element={<AllFilms genres={genres} />}>
            <Route path="AllFilms/details/:id" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
