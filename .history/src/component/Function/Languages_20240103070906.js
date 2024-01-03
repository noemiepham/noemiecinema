import { useEffect, useState } from "react";
import userContext from "../../component/useContext.js/useContext";
import { useContext } from "react";

const Languages = () => {
  const Languages = useContext(userContext);
  const token = process.env.REACT_APP_API_TOKEN;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://api.themoviedb.org/3/configuration/primary_translations";
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
  }, [token]);
  // console.log("allfilm", data);
  return console.log("Languages", Languages);
};
export default Languages;
