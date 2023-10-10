import Icon from "/src/components/ui/Icon";

import styles from "./ActionButton.module.scss";

function ActionButton({ iconName }) {
  return (
    <button className={styles.container}>
      <Icon iconName={iconName} className={styles.icon} />
    </button>
  );
}

export default ActionButton;
