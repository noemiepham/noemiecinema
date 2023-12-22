import { useSelector } from "react-redux";

/* import CardFilms from "../../component/CardFilm/CardFilms";
import PageNavigation from "../../component/PageNavigation/PageNavigation";
 */
function SearchPages() {
  const searchState = useSelector((state) => state.searchState);

  return <div>search</div>;
}

export default SearchPages;
