import CardFilms from "../../component/CardFilm/CardFilms";
import "./AllFilms.css";
import { useEffect, useState } from "react";

const AllFilms = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "6a973be32b86f3ac7884bc3edb007e6a"; // Replace with your actual API key from The Movie Database (TMDb)

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            // Add your API key to the Authorization header
            Authorization: `Bearer ${apiKey}`,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiKey]);
  return (
    <div className="allFilmSection">
      <CardFilms data={movies} />
    </div>
  );
};
export default AllFilms;
