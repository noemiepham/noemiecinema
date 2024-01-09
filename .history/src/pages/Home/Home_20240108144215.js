import "./home.css";
import NewfilmSection from "../../component/NewFilmSection/NewfilmSection";
import UpdateFilmSection from "../../component/UpdateFilmSection/UpdateFilmSection";
import NowWatching from "../../component/NowWatching/NowWatching";

function Home({ Sgenres = "all" }) {
  //console.log("home", genres);
  return (
    <>
      {/* card new film for home page */}
      <NewfilmSection numItemShow={12} />
      <UpdateFilmSection numItemShow={6} />
      <NowWatching />
    </>
  );
}

export default Home;
