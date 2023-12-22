import { useEffect } from "react";
import { useSelector } from "react-redux";

/* import CardFilms from "../../component/CardFilm/CardFilms";
import PageNavigation from "../../component/PageNavigation/PageNavigation";
 */
function SearchPages() {
  const searchResult = useSelector((state) => state.searchState);

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);
  return <div style={{ color: "white" }}>dsgsrgsfg sd</div>;
}

export default SearchPages;
