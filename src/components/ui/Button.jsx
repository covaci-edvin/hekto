import styles from "./Button.module.scss";

function Button({
  size = "md",
  color = "default",
  children,
  onClick = () => {},
  className = "",
}) {
  const classNames = `${styles.btn} ${styles[size]} ${styles[color]} ${className}`;

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
