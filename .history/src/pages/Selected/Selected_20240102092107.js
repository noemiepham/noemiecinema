import { useEffect } from "react";
import { useSelector } from "react-redux";
import CardFilms from "../../component/CardFilm/CardFilms";

/* import CardFilms from "../../component/CardFilm/CardFilms";
import PageNavigation from "../../component/PageNavigation/PageNavigation";
 */
function Selected() {
  const selectedResult = useSelector((state) => state.selectedState);
  const { data, success, loading, error } = selectedResult;
  useEffect(() => {
    //console.log(selectedResult, "selectedResult", success);
  }, [selectedResult]);
  return success ? <CardFilms data={data.results} /> : <div>Not found</div>;
}

export default Selected;
