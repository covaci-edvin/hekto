import styles from "./Price.module.scss";

function Price({ price, oldPrice }) {
  return (
    <div className="subtitle-4">
      <span className={styles.price}>${price.toFixed(2)}</span>
      {oldPrice && (
        <span className={styles["old-price"]}>${oldPrice.toFixed(2)}</span>
      )}
    </div>
  );
}

export default Price;
