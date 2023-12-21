import { useState } from "react";
import { router } from "react-router-dom";

const [filters, setFilters] = useState(filterData);

const searchProperties = (filterValues) => {
  const path = router.pathname;
  const { query } = router;
  const values = getFilterValues(filterValues);
  values.forEach((element) => {
    query[NavItem.name] = item.value;
  });
};
