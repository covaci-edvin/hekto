import LoadingSpinner from "/src/components/ui/LoadingSpinner";
import Error from "/src/components/ui/Error";

import DefaultFilter from "./Default/DefaultFilter";
import PriceFilter from "./Price/PriceFilter";
import styles from "./index.module.scss";

import useFetch from "/src/hooks/useFetch";
const FILTERS_URL = "http://localhost:3000/filters";

function Filters() {
  const { data, isPending, error } = useFetch(FILTERS_URL);

  return (
    <aside className={styles.container}>
      {error && <Error message="Failed to load filters" />}
      {isPending && <LoadingSpinner />}
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
