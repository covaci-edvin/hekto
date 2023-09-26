import Icon from "./Icon";
import styles from "./Socials.module.scss";

function Socials() {
  return (
    <ul className={styles.list}>
      <li className={styles["list-item"]}>
        <a href="#" className={styles.link}>
          <Icon iconName={"facebook"} />
        </a>
      </li>
      <li className={styles["list-item"]}>
        <a href="#" className={styles.link}>
          <Icon iconName={"instagram"} />
        </a>
      </li>
      <li className={styles["list-item"]}>
        <a href="#" className={styles.link}>
          <Icon iconName={"twitter"} />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
