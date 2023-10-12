import Icon from "/src/components/ui/Icon";

import styles from "./ActionButton.module.scss";

function ActionButton({ iconName, onClick }) {
  return (
    <button className={styles.container} onClick={onClick}>
      <Icon iconName={iconName} className={styles.icon} />
    </button>
  );
}

export default ActionButton;
