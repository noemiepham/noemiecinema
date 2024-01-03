import { useEffect } from "react";
import { useSelector } from "react-redux";
import CardFilms from "../../component/CardFilm/CardFilms";

/* import CardFilms from "../../component/CardFilm/CardFilms";
import PageNavigation from "../../component/PageNavigation/PageNavigation";
 */
function SearchPages() {
  const searchResult = useSelector((state) => state.searchState);
  const { data, success, loading, error } = searchResult;
  useEffect(() => {
    //console.log(searchResult, "dgjksdjoigpjoids", success);
  }, [searchResult]);
  return success ? <CardFilms data={data.results} /> : <div>Not found</div>;
}

export default SearchPages;
