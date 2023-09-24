import React from "react";
import classes from "./HeaderSelectInput.module.scss";
import { capitalizeFirstLetter } from "../../utils/utilityFunctions";

function HeaderSelectInput({ options = [] }) {
  return (
    <select className={`subtitle-4 ${classes.select}`}>
      {options.map((option, index) => (
        <option value={option} key={index}>
          {capitalizeFirstLetter(option)}
        </option>
      ))}
    </select>
  );
}

export default HeaderSelectInput;
