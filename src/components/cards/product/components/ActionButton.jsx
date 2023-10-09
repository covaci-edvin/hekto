import Icon from "/src/components/ui/Icon";

import styles from "./ActionButton.module.scss";

function ActionButton({ iconName }) {
  return (
    <div className={styles.container}>
      <Icon iconName={iconName} className={styles.icon} />
    </div>
  );
}

export default ActionButton;
