import styles from "./Icon.module.scss";

import Sprite from "/src/assets/svgs/sprite.svg";

function Icon({ iconName, className = "" }) {
  return (
    <svg className={`${styles["icon-default"]} ${className}`}>
      <use href={`${Sprite}#${iconName}`} />
    </svg>
  );
}

export default Icon;
