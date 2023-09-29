import styles from "./ViewControl.module.scss";

import Icon from "/src/components/ui/Icon";

function ViewControl({ viewMode, setViewMode }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>View:</span>
      <div className={styles.options}>
        <div
          onClick={() => {
            setViewMode("list");
          }}
          className={`${styles.option} ${
            viewMode === "list" ? styles.active : ""
          }`}
        >
          <Icon iconName="list" className={styles.icon} />
        </div>
        <div
          onClick={() => {
            setViewMode("grid");
          }}
          className={`${styles.option} ${
            viewMode === "grid" ? styles.active : ""
          }`}
        >
          <Icon iconName="grid" className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default ViewControl;
