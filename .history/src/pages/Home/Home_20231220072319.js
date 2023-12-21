import "./home.css";
import NewfilmSection from "../../component/NewFilmSection/NewfilmSection";
import UpdateFilmSection from "../../component/UpdateFilmSection/UpdateFilmSection";
import NowWatching from "../../component/NowWatching/NowWatching";

function Home({ genres }) {
  console.log("home", genres);
  return (
    <>
      {/* card new film for home page */}
      <NewfilmSection genres={genres} />
      <UpdateFilmSection genres={genres} />
      <NowWatching genres={genres} />
    </>
  );
}

export default Home;
