import { useEffect, useState } from "react";
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
  console.log("trailer'", data.results);
  const filterdata = data.results.filter((el) => {
    return el.site === "YouTube";
  });
  const firstResult = filterdata[0]?.key;
  console.log(firstResult);
  return <h2>Trailer</h2>;
}
export default Trailer;
