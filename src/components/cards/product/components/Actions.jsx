import ActionButton from "./ActionButton";
import styles from "./Actions.module.scss";

function Actions() {
  return (
    <div className={styles.container}>
      <ActionButton iconName="cart" />
      <ActionButton iconName="heart" />
      <ActionButton iconName="zoom-in" />
    </div>
  );
}

export default Actions;
