import { useSelector } from "react-redux";

/* import CardFilms from "../../component/CardFilm/CardFilms";
import PageNavigation from "../../component/PageNavigation/PageNavigation";
 */
function SearchPages() {
  const { data, success, loading } = useSelector((state) => state.searchState);

  return <div style={{ color: "white" }}>{success}</div>;
}

export default SearchPages;
