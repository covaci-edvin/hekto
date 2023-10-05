import DefaultFilter from "./components/DefaultFilter";
import PriceFilter from "./components/PriceFilter";
import styles from "./index.module.scss";

import useFetch from "/src/hooks/useFetch";
const FILTERS_URL = "http://localhost:3000/filters";

function Filters() {
  const { data, isPending, error } = useFetch(FILTERS_URL);

  //TODO: Add error handling
  return (
    <aside className={styles.container}>
      {isPending && <h1>Loading...</h1>}
      {data &&
        data.map((filter, index) => {
          if (filter.name === "price")
            return <PriceFilter filter={filter} key={index} />;

          return <DefaultFilter filter={filter} key={index} />;
        })}
    </aside>
  );
}

export default Filters;
