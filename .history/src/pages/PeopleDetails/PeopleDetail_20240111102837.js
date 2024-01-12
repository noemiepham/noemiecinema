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
  console.log("detail person", data);
  return (
    <Container className="people">
      <div class="wrapper">
        <div class="name">{data.name}</div>
        <div class="age">{data.birthday}</div>
        <div class="age">{data.deathday}</div>
        <div class="gender">{data.gender === 2 ? "male" : "female"}</div>
        <div class="profile_image">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.profile_path}`}
          />
        </div>
        <div class="blurb">{data.biography}</div>
        <div class="filmography">Filmography</div>
      </div>
    </Container>
  );
}
export default PeopleDetails;
