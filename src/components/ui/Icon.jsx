import classes from "./Icon.module.scss";
import Sprite from "../../assets/svgs/sprite.svg";

function Icon({ iconName, className = "" }) {
  return (
    <svg className={`${classes["icon-default"]} ${className}`}>
      <use href={`${Sprite}#${iconName}`} />
    </svg>
  );
}

export default Icon;
