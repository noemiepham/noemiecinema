import CardFilms from "../../component/CardFilm/CardFilms";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/UpdateFilmSection/UpdateFilmSection.css";
import { Row, Col } from "react-bootstrap";

import "./Movies.css";
const Movies = () => {
  const token = process.env.REACT_APP_API_TOKEN;
  // console.log("allfilm genres", genres);

  /* Tabs content menu to filter */
  const [data, setData] = useState([]);
  /* to show active class button next pages*/
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5);
  const [activePages, setActivePages] = useState(1);

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

  /*   const handleSelected = (e) => {
    const payload = {
      page: activePages,
      language: "en-EN",
      lists: "now_playing",
    };
    dispatch(doSelected(payload));
    navigate("selected", { replace: true });
    setSelected(e.target.value);
  }; */

  let page = activePages;
  useEffect(() => {
    const fetchData = async () => {
      // console.log(page);
      let url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
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
  }, [page, token]);
  // console.log("allfilm", data);
  return (
    <div className="allFilms">
      <div className="contentTitleUpdate">
        <Container>
          <Row className="row ">
            <Col sm={8}>
              <h2 className="bigTitle">Upcoming Movies</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <CardFilms data={data.results} numItemShow={20} Sgenres={"all"} />
      </Container>
      <Container className="sectionPaginator">
        <div className="Paginator">
          <span>
            Show {activePages} of {data.total_pages}
          </span>
        </div>
        <div className="flexPaginator">
          <ul>
            <li onClick={Minus}>⏪</li>
            {Array.from({ length: data.total_pages }, (_, num) => num + 1)
              .slice(min, max)
              .map((item) => (
                <li
                  key={item}
                  onClick={() => setActivePages(item)}
                  className={item === activePages ? "active" : ""}
                >
                  {item}
                </li>
              ))}
            <li>・・・</li>
            <li onClick={Plus}>⏩</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default Movies;
