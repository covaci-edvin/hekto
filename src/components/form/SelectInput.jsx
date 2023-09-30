import styles from "./SelectInput.module.scss";

import { capitalizeFirstLetter } from "/src/utils/utilityFunctions";

function SelectInput({ options = [] }) {
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

export default SelectInput;
