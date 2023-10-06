import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CustomSelectInput from "/src/components/form/CustomSelectInput";
import { sortKey, orderKey } from "/src/utils/constants";

const sortOptions = [
  { text: "best match", value: "best-match" },
  { text: "price low to high", value: "price-asc" },
  { text: "price high to low", value: "price-desc" },
  { text: "name A-Z", value: "title-asc" },
  { text: "name Z-A", value: "title-desc" },
];

function SortByControl() {
  const [sortBy, setSortBy] = useState(sortOptions[0]);

  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get(sortKey);
  const order = searchParams.get(orderKey);

  useEffect(() => {
    if (sort && order) {
      const newValue = sortOptions.find(
        (option) => option.value === sort + "-" + order,
      );
      setSortBy(newValue);
    } else {
      setSortBy(sortOptions[0]);
    }
  }, [sort, order]);

  function onHandleSort(value) {
    setSearchParams((params) => {
      if (value === "best-match") {
        params.delete(sortKey);
        params.delete(orderKey);
      } else {
        const sort = value.includes("price") ? "price" : "title";
        const order = value.includes("asc") ? "asc" : "desc";
        params.set(sortKey, sort);
        params.set(orderKey, order);
      }

      return params;
    });
  }

  return (
    <CustomSelectInput
      options={sortOptions}
      defaultOption={sortBy}
      title="Sort By:"
      onChange={onHandleSort}
    />
  );
}

export default SortByControl;
