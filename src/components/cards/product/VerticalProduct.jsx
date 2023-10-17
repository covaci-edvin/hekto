import { Link } from "react-router-dom";

import styles from "./VerticalProduct.module.scss";
import Actions from "./components/Actions";
import Colors from "./components/Colors";
import Price from "./components/Price";
import Title from "./components/Title";

import { imagesBaseUrl } from "/src/utils/constants";

function VerticalProduct({ product }) {
  return (
    <div className={styles.container}>
      <Link to={product.id} className={styles.link}>
        <div className={styles["img-container"]}>
          <img
            src={`${imagesBaseUrl}${product.image}`}
            className={styles.img}
          />
        </div>
        <Title>{product.title}</Title>
        <Colors colors={product.colors} />
        <Price price={product.price} oldPrice={product["old-price"]} />
      </Link>
      <div className={styles["actions-container"]}>
        <Actions type="vertical" productId={product.id} />
      </div>
    </div>
  );
}

export default VerticalProduct;
