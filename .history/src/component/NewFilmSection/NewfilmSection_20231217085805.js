import "./NewFilmSection.css";
import CardFilms from "../CardFilm/CardFilms";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function NewfilmSection({ genres }) {
  //console.log("NewfilmSection", genres);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };
    fetchtheData();
  }, []);
  // console.log("test1", data);
  return (
    <Container className="filmSection" fluid>
      <h2 className="bigTitle">
        <b>NEW ITEMS </b>OF THIS SEASON
      </h2>
      <div className="listNewFilms">
        <CardFilms data={data.results} genres={genres} />
      </div>
    </Container>
  );
}

export default NewfilmSection;
