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
const MoviesList = [
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
];

function App() {
  const initialFormStates = {
    genres: [],
    data: [],
    language: [],
  };
  const [notes, setNotes] = useState(initialFormStates);
  const [genres, setGenres] = useState([]);
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState([]);
  const MoviesLists = "popular";
  const apiKey = "6a973be32b86f3ac7884bc3edb007e6a";
  // Replace with your actual API key from The Movie Database (TMDb)
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk3M2JlMzJiODZmM2FjNzg4NGJjM2VkYjAwN2U2YSIsInN1YiI6IjY1N2FkNjEyZWM4YTQzMDExYTNiNWJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNZI1WkeIVJ1Nx2AoCXDWFn-yZzKyErXcDQbMc4E2Bs";

  /* Filter Language */
  useEffect(() => {
    const fetchData = async () => {
      const urlLanguage =
        "https://api.themoviedb.org/3/configuration/languages";
      try {
        const response = await fetch(urlLanguage, {
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
        setNotes(initialFormState(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiKey]);

  /*   Filter all listId genre */
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
  //console.log("genresNumber", genres);

  /* Show all movie and tvShow  */
  let page = 1;

  let url = `https://api.themoviedb.org/3/movie/${MoviesLists}?language=en-US&page=${page}`;

  useEffect(() => {
    const fetchData = async () => {
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
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiKey, page, MoviesLists]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home genres={genres} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="anime" element={<Anime />} />
          <Route path="tvshows" element={<TVShows />} />
          <Route path="details/:id" element={<Details gns={genres} />} />
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
