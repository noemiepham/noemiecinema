import { useState } from "react";
import { router } from "react-router-dom";

const [filters, setFilters] = useState(filterData);

const searchProperties = (filterValues) => {
  const path = router.pathname;
  const { query } = router;
  const values = getFilterValues(filterValues);
  values.forEach((item) => {
    query[item.name] = item.value;
  });
};

useEffect(() => {
     if (searchTerm !== '') {
       const fetchData = async () => {
         setLoading(true);
         const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
         setLoading(false);
         setLocationData(data?.hits);
       };
 
       fetchData();
     }
   }, [searchTerm]);
return (

)
