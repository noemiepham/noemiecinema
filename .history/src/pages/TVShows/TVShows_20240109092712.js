import "./TVShows.css";
import CardFilms from "../../component/CardFilm/CardFilms";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/UpdateFilmSection/UpdateFilmSection.css";
import { Row, Col, Dropdown } from "react-bootstrap";
import userContext from "../../component/useContext.js/dataContext";
import { useContext } from "react";

const TVShows = () => {
  /* Handle category selected ... */
  const [Selected, setSelected] = useState("");

  const genres = useContext(userContext);
  const token = process.env.REACT_APP_API_TOKEN;
  // console.log("allfilm genres", genres);

  /* Tabs content menu to filter */
  const tabsValue = [
    {
      id: 1,
      text: "Lists",
      menu: [
        { name: "airing_today" },
        { name: "on_the_air" },
        { name: "popular" },
        { name: "top_rated" },
      ],
    },
    { id: 2, text: "Language", menu: [{ name: "en-US" }, { name: "fr-FR" }] },
  ];
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

  let page = activePages;
  useEffect(() => {
    const fetchData = async () => {
      // console.log(page);
      let url = `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}`;
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
              <h2 className="bigTitle"> Tivi Shows</h2>
              <ul className="contentTabs">
                {tabsValue.map((item) => (
                  <li key={item.text}>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {item.text}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {item.menu.map((element, i) => (
                          <Dropdown.Item
                            key={element + i}
                            value={Selected}
                            onChange={(e) => console.log(Selected)}
                          >
                            {element.name}
                          </Dropdown.Item>
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
export default TVShows;
