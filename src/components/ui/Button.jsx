import styles from "./Button.module.scss";

function Button({
  children,
  size = "md",
  color = "default",
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
