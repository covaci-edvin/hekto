import Icon from "/src/components/ui/Icon";

import styles from "./ActionButton.module.scss";

import { useState } from "react";

function ActionButton({ iconName, onClick, itemKey }) {
  const isInLocalStorage = localStorage.getItem(itemKey);
  const [isActive, setIsActive] = useState(isInLocalStorage);

  const btnClassNames = `${styles.container} ${isActive ? styles.active : ""}`;
  return (
    <button
      className={btnClassNames}
      onClick={() => {
        onClick();
        setIsActive((prev) => !prev);
      }}
    >
      <Icon iconName={iconName} className={styles.icon} />
    </button>
  );
}

export default ActionButton;
