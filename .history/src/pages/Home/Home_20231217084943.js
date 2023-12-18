import "./home.css";
import NewfilmSection from "../../component/NewFilmSection/NewfilmSection";
import UpdateFilmSection from "../../component/UpdateFilmSection/UpdateFilmSection";

function Home({ genres }) {
  // console.log(genres);
  return (
    <div className="home">
      {/* card new film for home page */}
      <NewfilmSection genres={genres} />
      <hr style={{ color: "#5ac6bc" }} />
      <UpdateFilmSection genres={genres} />
    </div>
  );
}

export default Home;
