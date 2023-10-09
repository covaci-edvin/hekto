import PaginationControls from "./components/PaginationControls";
import styles from "./index.module.scss";
import ListViewPlaceholder from "./placeholders/ListViewPlaceholder";
import GridView from "./views/GridView";
import ListView from "./views/ListView";
import { useProducts } from "../contexts/products";

import Error from "/src/components/ui/Error";

function Products({ viewMode }) {
  const { products, isPending, error } = useProducts();

  return (
    <div className={styles.container}>
      {error && <Error message="Failed to load products" />}
      {viewMode === "list" && (
        <>
          {products ? (
            <ListView products={products} />
          ) : (
            <ListViewPlaceholder />
          )}
        </>
      )}
      {viewMode === "grid" && (
        <>
          {products ? (
            <GridView products={products} />
          ) : (
            <></> //TODO: create GridViewPlaceholder component and replace it here
          )}
        </>
      )}
      {products?.length > 0 ? (
        <PaginationControls />
      ) : (
        <Error message={"No products found"} />
      )}
    </div>
  );
}

export default Products;
