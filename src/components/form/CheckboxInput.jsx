import { useId } from "react";

import styles from "./CheckboxInput.module.scss";

import Icon from "/src/components/ui/Icon";

function CheckboxInput({
  color = "pink",
  children,
  dataValue,
  type = "default",
  isChecked,
  onChange,
}) {
  const id = useId();
  const classesCheckBox = `${styles["icon-container"]} ${styles[color]}`;

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        id={id}
        className={styles.checkbox}
        data-value={dataValue}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles.container}>
        {type !== "color-filter" && (
          <span className={classesCheckBox}>
            <Icon iconName="check" className={styles.icon} />
          </span>
        )}
        {children}
      </label>
    </>
  );
}

export default CheckboxInput;
