const [data, setData] = useState([]);

const apiKey = "6a973be32b86f3ac7884bc3edb007e6a";
// Replace with your actual API key from The Movie Database (TMDb)
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk3M2JlMzJiODZmM2FjNzg4NGJjM2VkYjAwN2U2YSIsInN1YiI6IjY1N2FkNjEyZWM4YTQzMDExYTNiNWJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNZI1WkeIVJ1Nx2AoCXDWFn-yZzKyErXcDQbMc4E2Bs";

useEffect(() => {
  const fetchData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

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
      setData(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [apiKey]);
