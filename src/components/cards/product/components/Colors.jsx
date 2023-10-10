import styles from "./Colors.module.scss";

function Colors({ colors = [] }) {
  return (
    <div className={styles.container}>
      {colors.map((color) => (
        <span
          key={color}
          className={styles.color}
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  );
}

export default Colors;
