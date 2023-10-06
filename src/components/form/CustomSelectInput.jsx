import { capitalizeFirstLetter } from "/src/utils/utilityFunctions";

import styles from "./CustomSelectInput.module.scss";

import Icon from "/src/components/ui/Icon";

import { useEffect, useRef, useState } from "react";

import useClickedOutside from "../../hooks/useClickedOutside";

function CustomSelectInput({
  defaultOption,
  options,
  title,
  onChange = () => {},
}) {
  const inputRef = useRef();

  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = useState(defaultOption);

  useEffect(() => {
    setValue(defaultOption);
  }, [defaultOption]);

  useClickedOutside(inputRef, () => setIsOpened(false), isOpened);

  function toggleList() {
    setIsOpened((prev) => !prev);
  }

  function setValueHandler(e) {
    const optionValue = e.target.dataset.value;
    const optionText = e.target.textContent;
    if (optionValue !== value.value) {
      setValue({ text: optionText, value: optionValue });
      onChange(optionValue);
    }
    toggleList();
  }

  const iconClasses = `${styles["icon-container"]} ${
    isOpened ? "u-rotate-180deg" : ""
  }`;

  const inputClasses = `${styles.input} ${
    isOpened ? styles["input--focused"] : ""
  }`;

  return (
    <div className={styles.container} ref={inputRef}>
      <button className={styles.button} onClick={toggleList}>
        <span className={styles.title}>{title}</span>
        <div className={inputClasses}>
          <span className={styles.value}>
            {capitalizeFirstLetter(value.text)}
          </span>
          <span className={iconClasses}>
            <Icon iconName="chevron" className={styles.icon} />
          </span>
        </div>
      </button>
      {isOpened && (
        <ul className={styles.list}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.option}
              onClick={setValueHandler}
              data-value={option.value}
            >
              {capitalizeFirstLetter(option.text)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelectInput;
