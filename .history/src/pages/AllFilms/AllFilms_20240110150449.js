import CardFilms from "../../component/CardFilm/CardFilms";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../component/CardFilm/cardFilms.css";
import "../../component/UpdateFilmSection/UpdateFilmSection.css";
import { Row, Col, Dropdown } from "react-bootstrap";
import userContext from "../../component/useContext.js/dataContext";
import { useContext } from "react";
import Languages from "../../component/Function/convertArray";
import "./AllFilms.css";
console.log("data", Languages);
const AllFilms = () => {
  /* Handle category selected ... */
  const [selected, setSelected] = useState({
    list: "now_playing",
    languages: "en-US",
    genres: "all",
    rating: "all",
  });
  //console.log("test ", selected.genres);
  /*  const [SLists, setSLists] = useState("now_playing");
  const [SLanguages, setSLanguages] = useState("en-US");
  const [Sgenres, setSgenres] = useState("all");
  const [SRating, setSRating] = useState("all"); */
  //console.log("all selected", selected.genres);

  const genres = useContext(userContext);
  const token = process.env.REACT_APP_API_TOKEN;
  // console.log("allfilm genres", genres);

  /* Tabs content menu to filter */
  const tabsValue = [
    { id: 1, text: "All genres", menu: genres },
    {
      id: 2,
      text: "Lists",
      menu: [
        { id: 1, name: "now_playing" },
        { id: 2, name: "popular" },
        { id: 3, name: "top_rated" },
        { id: 4, name: "upcoming" },
      ],
    },
    { id: 3, text: "Language", menu: Languages },
    {
      id: 4,
      text: "Any rating",
      menu: [{ name: 5 }, { name: 7 }, { name: 9 }],
    },
    /*     {
      id: 5,
      text: "Relevance",
      menu: [
        { id: 1, name: "2021" },
        { id: 2, name: "2022" },
        { id: 3, name: "2023" },
      ],
    }, */
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
      let url = `https://api.themoviedb.org/3/movie/${selected.list}?language=${selected.languages}&page=${page}`;
      // console.log("url", url);
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
  }, [page, token, selected.languages, selected.list]);

  return (
    <div className="allFilms">
      <div className="contentTitleUpdate">
        <Container>
          <Row>
            <Col>
              <button className="filter-btn ">Filter</button>
              <h2 className="bigTitle">Show All Films</h2>
              <div className="filter">
                <ul className="mfilter">
                  {tabsValue.map((item) => (
                    <li key={item.text}>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {item.text}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          {item.menu.map((element, i) => (
                            <Dropdown.Item
                              key={element + i}
                              onClick={() => {
                                switch (item.text) {
                                  case "Language":
                                    setSelected({
                                      ...selected,
                                      languages: element.name,
                                    });
                                    break;
                                  case "Lists":
                                    setSelected({
                                      ...selected,
                                      list: element.name,
                                    });
                                    break;
                                  case "All genres":
                                    setSelected({
                                      ...selected,
                                      genres: element.name,
                                    });
                                    break;
                                  default:
                                    setSelected({
                                      ...selected,
                                      rating: element.name,
                                    });
                                }
                              }}
                            >
                              {element.name}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="filter-items">
                <ul className="contentTabs">
                  {tabsValue.map((item) => (
                    <li key={item.text}>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {item.text}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          {item.menu.map((element, i) => (
                            <Dropdown.Item
                              key={element + i}
                              onClick={() => {
                                switch (item.text) {
                                  case "Language":
                                    setSelected({
                                      ...selected,
                                      languages: element.name,
                                    });
                                    break;
                                  case "Lists":
                                    setSelected({
                                      ...selected,
                                      list: element.name,
                                    });
                                    break;
                                  case "All genres":
                                    setSelected({
                                      ...selected,
                                      genres: element.name,
                                    });
                                    break;
                                  default:
                                    setSelected({
                                      ...selected,
                                      rating: element.name,
                                    });
                                }
                              }}
                            >
                              {element.name}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <CardFilms
          data={data.results}
          Sgenres={selected.genres}
          Srating={selected.rating}
          numItemShow={20}
        />
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
export default AllFilms;
