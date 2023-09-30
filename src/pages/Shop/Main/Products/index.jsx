import GridView from "./components/GridView";
import ListView from "./components/ListView";
import styles from "./index.module.scss";

function Products({ viewMode }) {
  return (
    <div className={styles.container}>
      {viewMode === "list" ? <ListView /> : <GridView />}
    </div>
  );
}

export default Products;
