import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import ViewControl from "./components/ViewControl";
import styles from "./index.module.scss";

import CustomSelectInput from "/src/components/form/CustomSelectInput";

const SORT_BY_OPTIONS = [
  { text: "best match", value: "best-match" },
  { text: "price low to high", value: "price-l-h" },
  { text: "price high to low", value: "price-h-l" },
  { text: "name A-Z", value: "name-a-z" },
  { text: "name Z-A", value: "name-z-a" },
];

const PER_PAGE_OPTIONS = [
  { text: 5, value: 5 },
  { text: 10, value: 10 },
  { text: 15, value: 15 },
  { text: 30, value: 30 },
];

function Topbar({ viewMode, setViewMode }) {
  const [defaultPerPage, setDefaultPerPage] = useState(PER_PAGE_OPTIONS[1]);
  const [defaultSortBy, setDefaultSortBy] = useState(SORT_BY_OPTIONS[0]);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const perPageValue = searchParams.get("_limit");
  const sortValue = searchParams.get("_sort");
  const orderValue = searchParams.get("_order");

  useEffect(() => {
    setDefaultPerPage({ text: perPageValue, value: perPageValue });
  }, [perPageValue]);

  useEffect(() => {
    switch (sortValue) {
      case "price": {
        orderValue === "asc" && setDefaultSortBy(SORT_BY_OPTIONS[1]);
        orderValue === "desc" && setDefaultSortBy(SORT_BY_OPTIONS[2]);
        break;
      }
      case "title": {
        orderValue === "asc" && setDefaultSortBy(SORT_BY_OPTIONS[3]);
        orderValue === "desc" && setDefaultSortBy(SORT_BY_OPTIONS[4]);
        break;
      }
    }
  }, [sortValue, orderValue]);

  function setPaginationHandler(value) {
    setSearchParams((params) => {
      params.set("_limit", value);
      return params;
    });
  }

  function setSortByHandler(value) {
    switch (value) {
      case "best-match": {
        setSearchParams((params) => {
          params.delete("_sort");
          params.delete("_order");
          return params;
        });
        break;
      }

      case "price-l-h": {
        setSearchParams((params) => {
          params.set("_sort", "price");
          params.set("_order", "asc");
          return params;
        });
        break;
      }

      case "price-h-l": {
        setSearchParams((params) => {
          params.set("_sort", "price");
          params.set("_order", "desc");
          return params;
        });
        break;
      }

      case "name-a-z": {
        setSearchParams((params) => {
          params.set("_sort", "title");
          params.set("_order", "asc");
          return params;
        });
        break;
      }

      case "name-z-a": {
        setSearchParams((params) => {
          params.set("_sort", "title");
          params.set("_order", "desc");
          return params;
        });
        break;
      }
    }
  }

  function resetFiltersHandler() {
    navigate("?_page=1&_limit=10");
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className="subtitle-2">Forniture & Electronics</h1>
        <p className={styles.request}>About 9,620 results (0.62 seconds)</p>
      </div>
      <div className={styles.controls}>
        <button className={styles.reset} onClick={resetFiltersHandler}>
          <p className="body-text-md">Reset Filters</p>
        </button>
        <CustomSelectInput
          options={PER_PAGE_OPTIONS}
          defaultOption={defaultPerPage}
          title="Per Page:"
          onChange={setPaginationHandler}
        />
        <CustomSelectInput
          options={SORT_BY_OPTIONS}
          defaultOption={defaultSortBy}
          title="Sort By:"
          onChange={setSortByHandler}
        />
        <ViewControl viewMode={viewMode} setViewMode={setViewMode} />
      </div>
    </div>
  );
}

export default Topbar;
