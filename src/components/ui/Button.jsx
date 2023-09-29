import styles from "./Button.module.scss";

function Button({ size = "md", color = "default", children }) {
  const classNames = `${styles.btn} ${styles[size]} ${styles[color]}`;

  return <button className={classNames}>{children}</button>;
}

export default Button;
