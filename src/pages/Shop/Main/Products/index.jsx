import GridView from "./components/GridView";
import ListView from "./components/ListView";
import PaginationControls from "./components/PaginationControls";
import styles from "./index.module.scss";
import { useProducts } from "../products-context";

function Products({ viewMode }) {
  const { products, isPending, error } = useProducts();

  console.log({ products });
  return (
    <div className={styles.container}>
      {viewMode === "list" ? <ListView /> : <GridView />}
      <PaginationControls />
    </div>
  );
}

export default Products;
