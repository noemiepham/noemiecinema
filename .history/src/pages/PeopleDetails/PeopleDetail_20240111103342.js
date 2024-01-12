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
        <div class="name">
          <h3>{data.name}</h3>
          <div>
            <span>Also Known As</span>
            {data.also_known_as}
          </div>
        </div>
        <div class="age">
          <ul>
            <li>
              <span>Birthdate</span>
              {data.birthday}
            </li>
            <li>
              <span>Place of Birth</span>
              {data.place_of_birth}
            </li>
            <li>
              <span>Place of Birth</span>
              {data.place_of_birth}
            </li>
            <li>
              <span>Known For</span>
              {data.known_for_department}
            </li>
            <li></li>
          </ul>
        </div>
        <div class="age">{data.deathday}</div>
        <div class="gender">{data.gender === 2 ? "male" : "female"}</div>
        <div class="profile_image">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.profile_path}`}
            alt={data.name}
          />
        </div>
        <div class="blurb">{data.biography}</div>
        <div class="filmography">Filmography</div>
      </div>
    </Container>
  );
}
export default PeopleDetails;
