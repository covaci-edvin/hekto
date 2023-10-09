import styles from "./HorizontalProductPlaceholder.module.scss";
import cardStyles from "../HorizontalProduct.module.scss";

function HorizontalProductPlaceholder() {
  return (
    <div className={`${cardStyles.container}`}>
      <div
        className={`${cardStyles["img-container"]} ${styles["img-container"]}`}
      ></div>
      <div className={styles["info-container"]}>
        <div className={styles.title}></div>
        <div className={styles.text}></div>
        <div className={styles.actions}></div>
      </div>
    </div>
  );
}

export default HorizontalProductPlaceholder;
