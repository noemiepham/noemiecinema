import { useEffect, useState } from "react";
import userContext from "../../component/useContext.js/useContext";
import { useContext } from "react";

const Languages = () => {
  const genres = useContext(userContext);
  const token = process.env.REACT_APP_API_TOKEN;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(page);
      let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
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
                          <Dropdown.Item key={element}>
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
        <CardFilms data={data.results} numItemShow={20} />
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
export default Languages;
