import PaginationControls from "./components/PaginationControls";
import styles from "./index.module.scss";
import GridView from "./views/GridView";
import ListView from "./views/ListView";
import { useProducts } from "../contexts/products";

function Products({ viewMode }) {
  const { products, isPending, error } = useProducts();

  return (
    <div className={styles.container}>
      {viewMode === "list" ? <ListView /> : <GridView />}
      <PaginationControls />
    </div>
  );
}

export default Products;
