import { useState } from "react";

import Filters from "./Filters";
import Products from "./Products";
import Topbar from "./TopBar";
import styles from "./index.module.scss";
import { ProductsProvider } from "./products-context";

function Main() {
  const [viewMode, setViewMode] = useState("list");

  return (
    <ProductsProvider>
      <section className={`${styles.section}`}>
        <Topbar viewMode={viewMode} setViewMode={setViewMode} />
        <Filters />
        <Products viewMode={viewMode} />
      </section>
    </ProductsProvider>
  );
}

export default Main;
