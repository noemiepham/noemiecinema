import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

function Trailer() {
  const token = process.env.REACT_APP_API_TOKEN;
  const params = useParams();
  const [data, setData] = useState("");
  //console.log("detail", params.id);
  useEffect(() => {
    const fetch = require("node-fetch");
    const url = `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`;
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
  }, [params.id, token]);
  //console.log("trailer'", data.results);
  const filterdata = data.results?.filter((element) => {
    return element.site === "YouTube" && element.key;
  });
  //  let firstResult = [];
  //filterdata.map((e) => console.log(e));
  console.log("filterdata", filterdata);
  return filterdata?.map((e, i) => (
    <div className="trailer">
      <ul>
        <li>{i}</li>
      </ul>
      <ReactPlayer url={`https://youtu.be/${e.key}`} />
    </div>
  ));
}
export default Trailer;
