import { useEffect, useState } from "react";
import { useContext } from "../../component/useContext.js/useContext";
import { createContext, useReducer } from "react";

const Languages = () => {
  const token = process.env.REACT_APP_API_TOKEN;
  const [data, setData] = useState([]);

  const initialState = {
    genres: [],
    languages: [],
  };
  const reducer = (state, action) => {
    return { ...state, ...action };
  };

  const CategoryContext = createContext();
  const useContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  };

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
  return data;
};
export default Languages;
