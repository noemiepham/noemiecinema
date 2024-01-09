import "./home.css";
import NewfilmSection from "../../component/NewFilmSection/NewfilmSection";
import UpdateFilmSection from "../../component/UpdateFilmSection/UpdateFilmSection";
import NowWatching from "../../component/NowWatching/NowWatching";

const Home = () => {
  //console.log("home", Sgenres);
  return (
    <>
      {/* card new film for home page */}
      <NewfilmSection numItemShow={12} />
      <UpdateFilmSection numItemShow={6} />
      <NowWatching />
    </>
  );
};

export default Home;
