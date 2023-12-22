import CardFilms from "../../component/CardFilm/CardFilms";
import CardUpdate from "../../component/CardUpdate/CardUpdate";
import "./anime.css";

function Anime() {
  const tabsValue = [
    { id: 1, text: "All genres", menu: ["Titre A-Z"] },
    { id: 2, text: "Language", menu: ["En", "Ja", "Fr", "Sp", "Other"] },
    { id: 3, text: "Any rating", menu: ["from 5.0", "from 7.0", "from 8.0"] },
    { id: 4, text: "Relevance", menu: ["2021", "2022", "2023"] },
  ];
  return (
    <div>
      <CardUpdate className="anime" />;
    </div>
  );
}

export default Anime;
