import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function Trailer({ genres }) {
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
  return <ReactPlayer url="https://www.youtube.com/watch?v=mv8uyegB83Q" />;
}

export default Trailer;
