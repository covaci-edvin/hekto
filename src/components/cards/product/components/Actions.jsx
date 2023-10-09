import ActionButton from "./ActionButton";
import styles from "./Actions.module.scss";

function Actions() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <ActionButton iconName="cart" />
      </button>
      <button className={styles.button}>
        <ActionButton iconName="heart" />
      </button>
      <button className={styles.button}>
        <ActionButton iconName="zoom-in" />
      </button>
    </div>
  );
}

export default Actions;
