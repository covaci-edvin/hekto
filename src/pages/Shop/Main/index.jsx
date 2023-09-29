import { useState } from "react";

import Products from "./Products";
import Topbar from "./TopBar";
import styles from "./index.module.scss";

function Main() {
  const [viewMode, setViewMode] = useState("list");
  return (
    <section className={`${styles.section}`}>
      <Topbar viewMode={viewMode} setViewMode={setViewMode} />
      <Products viewMode={viewMode} />
    </section>
  );
}

export default Main;
