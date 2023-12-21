import CardFilms from "../../component/CardFilm/CardFilms";
import PageNavigation from "../../component/PageNavigation/PageNavigation";

function SearchPages({ data }) {
  return (
    <div>
      <CardFilms data={data} />
      <PageNavigation data={data} />
    </div>
  );
}

export default SearchPages;
