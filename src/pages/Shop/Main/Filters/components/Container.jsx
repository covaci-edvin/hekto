import styles from "./Container.module.scss";
import Title from "./Title";

function Container({ children, filterName }) {
  const formClasses =
    filterName !== "colors" ? styles.options : styles["color-options"];

  return (
    <div className={styles.container}>
      <Title title={filterName} />
      <form id={filterName} className={formClasses}>
        {children}
      </form>
    </div>
  );
}

export default Container;
