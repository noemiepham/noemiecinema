import { useState } from "react";
import { router } from "react-router-dom";

const [filters, setFilters] = useState(filterData);

const searchProperties = (filterValues) => {
  const path = router.pathname;
  const { query } = router;
  const values = getFilterValues(filterValues);
  values.forEach((item) => {
    if (item.value && filterValues?.[item.name]) {
      query[item.name] = item.value;
    }
  });

  router.push({ pathname: path, query: query });
};

useEffect(() => {
  if (searchTerm !== "") {
    const fetchData = async () => {
      const data = await fetchApi(
        `${baseUrl}/auto-complete?query=${searchTerm}`
      );
    };

    fetchData();
  }
}, [searchTerm]);
return null;
