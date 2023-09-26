import styles from "./HeaderSelectInput.module.scss";

import { capitalizeFirstLetter } from "/src/utils/utilityFunctions";

function HeaderSelectInput({ options = [] }) {
  return (
    <select className={`subtitle-4 ${styles.select}`}>
      {options.map((option, index) => (
        <option value={option} key={index}>
          {capitalizeFirstLetter(option)}
        </option>
      ))}
    </select>
  );
}

export default HeaderSelectInput;
