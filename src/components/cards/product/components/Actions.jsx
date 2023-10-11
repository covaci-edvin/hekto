import ActionButton from "./ActionButton";
import styles from "./Actions.module.scss";

function Actions({ type = "horizontal" }) {
  const classNames = `${styles.container} ${
    type === "vertical" ? styles.vertical : ""
  }`;

  return (
    <div className={classNames}>
      <ActionButton iconName="cart" />
      <ActionButton iconName="heart" />
      <ActionButton iconName="zoom-in" />
    </div>
  );
}

export default Actions;
