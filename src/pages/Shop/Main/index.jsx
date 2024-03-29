import { useState } from "react";

import Filters from "./Filters";
import Products from "./Products";
import Topbar from "./TopBar";
import { ProductsProvider } from "./contexts/products";
import styles from "./index.module.scss";

function Main() {
  const [viewMode, setViewMode] = useState("list");

  return (
    <ProductsProvider>
      <section className={`${styles.section}`}>
        <Topbar viewMode={viewMode} setViewMode={setViewMode} />
        <div className={styles.container}>
          <Filters />
          <Products viewMode={viewMode} />
        </div>
      </section>
    </ProductsProvider>
  );
}

export default Main;
