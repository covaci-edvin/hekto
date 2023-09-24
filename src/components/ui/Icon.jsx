import React from "react";
import Sprite from "../../assets/svgs/sprite.svg";
import classes from "./Icon.module.scss";

function Icon({ iconName, className = "" }) {
  return (
    <svg className={`${classes["icon-default"]} ${className}`}>
      <use href={`${Sprite}#${iconName}`} />
    </svg>
  );
}

export default Icon;
