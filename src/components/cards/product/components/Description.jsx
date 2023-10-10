import styles from "./Description.module.scss";

function Description({ children }) {
  return <p className={`body-text-md ${styles.text}`}>{children}</p>;
}

export default Description;
