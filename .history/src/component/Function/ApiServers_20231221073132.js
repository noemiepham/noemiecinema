import CardFilms from "../../component/CardFilm/CardFilms";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/UpdateFilmSection/UpdateFilmSection.css";
import { Row, Col, Dropdown } from "react-bootstrap";
import "./AllFilms.css";

const AllFilms = ({ genres }) => {
  /* navigate to page ditail */

  /* Tabs content menu to filter */
  const tabsValue = [
    { id: 1, text: "All genres", menu: ["Titre A-Z"] },
    { id: 2, text: "Language", menu: ["En", "Ja", "Fr", "Sp", "Other"] },
    { id: 3, text: "Any rating", menu: ["from 5.0", "from 7.0", "from 8.0"] },
    { id: 4, text: "Relevance", menu: ["2021", "2022", "2023"] },
  ];
  const [data, setData] = useState([]);
  /* to show active class button next pages*/
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5);
  const [activePages, setActivePages] = useState(1);
  const [values, setValues] = useState("populer");

  // console.log(min);
  const Minus = () => {
    if (min < 1) return null;
    setMin((count) => count - 5);
    setMax((count) => count - 5);
  };
  const Plus = () => {
    if (max > 163) return;
    setMax((count) => count + 5);
    setMin((count) => count + 5);
  };

  const apiKey = "6a973be32b86f3ac7884bc3edb007e6a";
  // Replace with your actual API key from The Movie Database (TMDb)
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk3M2JlMzJiODZmM2FjNzg4NGJjM2VkYjAwN2U2YSIsInN1YiI6IjY1N2FkNjEyZWM4YTQzMDExYTNiNWJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNZI1WkeIVJ1Nx2AoCXDWFn-yZzKyErXcDQbMc4E2Bs";

  let page = activePages;
  let query = values;
  useEffect(() => {
    const fetchData = async () => {
      console.log(page);
      let url = `https://api.themoviedb.org/3/search/movie?${query}?language=en-US&page=${page}`;
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
  }, [apiKey, page, query]);
  console.log("query", data);
  return (
    <div className="allFilms">
      <Container>
        <CardFilms data={data.results} genres={genres} numItemShow={20} />
      </Container>
    </div>
  );
};
export default AllFilms;
