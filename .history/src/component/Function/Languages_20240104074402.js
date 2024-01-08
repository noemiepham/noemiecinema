import { useEffect, useState } from "react";
import convertArray from "../../component/Function/convertArray";
import "./AllFilms.css";

const [languages, setLanguages] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    let url = "https://api.themoviedb.org/3/configuration/primary_translations";
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
      setLanguages(data.fiter((s) => s?.id ?? false));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [token]);
console.log("lg", convertArray(languages));
