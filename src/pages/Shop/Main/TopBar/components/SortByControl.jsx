import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CustomSelectInput from "/src/components/form/CustomSelectInput";

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

  const sort = searchParams.get("_sort");
  const order = searchParams.get("_order");

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
        params.delete("_sort");
        params.delete("_order");
      } else {
        const sort = value.includes("price") ? "price" : "title";
        const order = value.includes("asc") ? "asc" : "desc";
        params.set("_sort", sort);
        params.set("_order", order);
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
