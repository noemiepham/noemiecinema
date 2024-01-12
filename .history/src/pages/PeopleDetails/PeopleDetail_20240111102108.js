import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./PeopleDetail.css";
/* import genresFunction from "../Function/filterGenres";
 */
function PeopleDetails() {
  const token = process.env.REACT_APP_API_TOKEN;
  const [data, setData] = useState([]);
  const params = useParams();
  console.log("detail", params.id);
  useEffect(() => {
    const fetch = require("node-fetch");
    const url = `https://api.themoviedb.org/3/person/${params.id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("error:" + err));
  }, [token, params]);

  return data?.map((item) => (
    <Container className="people">
      <div class="wrapper">
        <div class="name">{item.name}</div>
        <div class="age">item.birthday</div>
        <div class="age">item.deathday</div>
        <div class="gender">{item.gender === 2 ? "male" : "female"}</div>
        <div class="profile_image">{`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.profile_path}`}</div>
        <div class="blurb">summary</div>
        <div class="filmography">Filmography</div>
      </div>
    </Container>
  ));
}
export default PeopleDetails;
