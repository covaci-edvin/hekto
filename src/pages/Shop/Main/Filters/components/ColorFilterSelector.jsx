import styles from "./ColorFilterSelector.module.scss";

import { capitalizeFirstLetter } from "/src/utils/utilityFunctions";

function ColorFilterSelector({ color }) {
  return (
    <div className={styles.container}>
      <div
        className={styles["color-disk"]}
        style={{ backgroundColor: color }}
      />
      <p className={`body-text-md ${styles.text}`}>
        {capitalizeFirstLetter(color)}
      </p>
    </div>
  );
}

export default ColorFilterSelector;
