import ViewControl from "./components/ViewControl";
import styles from "./index.module.scss";

import CustomSelectInput from "/src/components/form/CustomSelectInput";

const SORTBY_OPTIONS = [
  { text: "best match", value: "best-match" },
  { text: "new arrival", value: "new-arrival" },
  { text: "price low to high", value: "price-l-h" },
  { text: "price high to low", value: "price-h-l" },
  { text: "name A-Z", value: "name-a-z" },
  { text: "name Z-A", value: "name-z-a" },
];

const PERPAGE_OPTIONS = [
  { text: 5, value: 5 },
  { text: 10, value: 10 },
  { text: 15, value: 15 },
  { text: 30, value: 30 },
];

function Topbar({ viewMode, setViewMode }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className="subtitle-2">Forniture & Electronics</h1>
        <p className={styles.request}>About 9,620 results (0.62 seconds)</p>
      </div>
      <div className={styles.controls}>
        <CustomSelectInput
          options={PERPAGE_OPTIONS}
          defaultOption={PERPAGE_OPTIONS[1]}
          title="Per Page:"
        />
        <CustomSelectInput
          options={SORTBY_OPTIONS}
          defaultOption={SORTBY_OPTIONS[0]}
          title="Sort By:"
        />
        <ViewControl viewMode={viewMode} setViewMode={setViewMode} />
      </div>
    </div>
  );
}

export default Topbar;
