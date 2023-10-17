import { Link } from "react-router-dom";

import styles from "./HorizontalProduct.module.scss";
import Actions from "./components/Actions";
import Colors from "./components/Colors";
import Description from "./components/Description";
import Price from "./components/Price";
import Title from "./components/Title";
import Rating from "../../ui/Rating";

import { imagesBaseUrl } from "/src/utils/constants";

function HorizontalProduct({ product }) {
  return (
    <div className={styles.container}>
      <Link to={product.id} className={styles.link}>
        <div className={styles["img-container"]}>
          <img
            src={`${imagesBaseUrl}${product.image}`}
            className={styles.img}
          />
        </div>
      </Link>
      <div className={styles["info-container"]}>
        <Link
          to={product.id}
          className={`${styles.link} ${styles["info-link"]}`}
        >
          <div className={styles["horizontal-container"]}>
            <Title>{product.title}</Title>
            <Colors colors={product.colors} />
          </div>
          <div className={styles["horizontal-container"]}>
            <Price price={product.price} oldPrice={product["old-price"]} />
            <Rating nrOfStars={product.rating} />
          </div>
          <Description>{product.description}</Description>
        </Link>
        <div className={styles.actions}>
          <Actions productId={product.id} />
        </div>
      </div>
    </div>
  );
}

export default HorizontalProduct;
