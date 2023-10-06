import PerPageControl from "./components/PerPageControl";
import ResetFiltersControl from "./components/ResetFiltersControl";
import SortByControl from "./components/SortByControl";
import ViewControl from "./components/ViewControl";
import styles from "./index.module.scss";

function Topbar({ viewMode, setViewMode }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className="subtitle-2">Forniture & Electronics</h1>
        <p className={styles.request}>About 9,620 results (0.62 seconds)</p>
      </div>
      <div className={styles.controls}>
        <ResetFiltersControl />
        <PerPageControl />
        <SortByControl />
        <ViewControl viewMode={viewMode} setViewMode={setViewMode} />
      </div>
    </div>
  );
}

export default Topbar;
