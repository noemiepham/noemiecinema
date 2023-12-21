import CardFilms from "../../component/CardFilm/CardFilms";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/UpdateFilmSection/UpdateFilmSection.css";
import { Row, Col, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AllFilms.css";

const AllFilms = ({ genres }) => {
  /* navigate to page ditail */
  const navigator = useNavigate();

  /* Tabs content menu to filter */
  const tabsValue = [
    { id: 1, text: "All genres", menu: ["All films"] },
    { id: 2, text: "Language", menu: ["En", "Ja", "Fr", "Sp", "Other"] },
    { id: 3, text: "Any rating", menu: ["from 5.0", "from 7.0", "from 8.0"] },
    { id: 4, text: "Relevance", menu: ["2021", "2022", "2023"] },
  ];
  const [data, setData] = useState([]);
  const apiKey = "6a973be32b86f3ac7884bc3edb007e6a";
  // Replace with your actual API key from The Movie Database (TMDb)
  const token =
    `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk3M2JlMzJiODZmM2FjNzg4NGJjM2VkYjAwN2U2YSIsInN1YiI6IjY1N2FkNjEyZWM4YTQzMDExYTNiNWJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNZI1WkeIVJ1Nx2AoCXDWFn-yZzKyErXcDQbMc4E2Bs";

  useEffect(() => {
    const fetchData = async () => {
      const url =
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;

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
        setData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiKey]);
  //console.log("allfilm", genres);
  return (
    <div className="allFilms">
      <div className="contentTitleUpdate">
        <Container>
          <Row className="row ">
            <Col sm={8}>
              <h2 className="bigTitle">Show All Films</h2>
              <ul className="contentTabs">
                {tabsValue.map((item) => (
                  <li key={item.text}>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {item.text}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {item.menu.map((element) => (
                          <Dropdown.Item key={element}>{element}</Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <CardFilms data={data} genres={genres} />
      </Container>
    </div>
  );
};
export default AllFilms;
