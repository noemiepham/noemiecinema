import "./UpdateFilmSection.css";
import { useState, useEffect } from "react";
import CardUpdate from "../CardUpdate/CardUpdate";
import { Row } from "react-bootstrap";

function UpdateFilmSection({ genres }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&query=$bond&page=1"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };
    fetchtheData();
  }, []);
  return (
    <section className="filmSection">
      <h1 className="bigTitle">
        <b>Recently </b> Update Films
      </h1>
      <CardUpdate data={data.results} genres={genres} />
    </section>
  );
}

export default UpdateFilmSection;
