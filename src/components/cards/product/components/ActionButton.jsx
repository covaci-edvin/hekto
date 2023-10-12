import Icon from "/src/components/ui/Icon";

import styles from "./ActionButton.module.scss";

function ActionButton({ iconName, onClick = () => {}, isActive }) {
  const btnClassNames = `${styles.container} ${isActive ? styles.active : ""}`;

  return (
    <button className={btnClassNames} onClick={onClick}>
      <Icon iconName={iconName} className={styles.icon} />
    </button>
  );
}

export default ActionButton;
