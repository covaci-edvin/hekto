import Icon from "./Icon";
import classes from "./Socials.module.scss";

function Socials() {
  return (
    <ul className={classes.list}>
      <li className={classes["list-item"]}>
        <a href="#" className={classes.link}>
          <Icon iconName={"facebook"} />
        </a>
      </li>
      <li className={classes["list-item"]}>
        <a href="#" className={classes.link}>
          <Icon iconName={"instagram"} />
        </a>
      </li>
      <li className={classes["list-item"]}>
        <a href="#" className={classes.link}>
          <Icon iconName={"twitter"} />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
