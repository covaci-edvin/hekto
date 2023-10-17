import Price from "/src/components/cards/product/components/Price";

import styles from "./Details.module.scss";

import Rating from "/src/components/ui/Rating";
import Description from "/src/components/cards/product/components/Description";
import Button from "/src/components/ui/Button";
import Icon from "/src/components/ui/Icon";
import useProductLocalStorageAction from "/src/components/cards/product/hooks/useProductLocalStorageAction";

import { useNavigate } from "react-router-dom";

function Details({ product }) {
  const navigate = useNavigate();
  const { updateLocalStorage: updateWishlist, isActive: wishlistIsActive } =
    useProductLocalStorageAction("wishlist", product.id);

  const { updateLocalStorage: updateCart, isActive: cartIsActive } =
    useProductLocalStorageAction("cart", product.id);

  const btnWishlistClassNames = `${styles["btn-wishlist"]} ${
    wishlistIsActive ? styles["wishlist-active"] : ""
  }`;

  const btnCartClassNames = cartIsActive ? styles["cart-active"] : "";

  return (
    <div className={styles.container}>
      <div className={styles["details-container"]}>
        <h1 className="heading-3">{product.title}</h1>
        <Rating nrOfStars={product.rating} />
        <Price price={product.price} oldPrice={product["old-price"]} />
        <Description>{product.description}</Description>
      </div>
      <div className={styles.actions}>
        <Button
          className={btnCartClassNames}
          onClick={() => {
            cartIsActive ? navigate("/cart") : updateCart();
          }}
        >
          {cartIsActive ? "View cart" : "Add to cart"}
        </Button>
        <button className={btnWishlistClassNames} onClick={updateWishlist}>
          <Icon iconName="heart" className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

export default Details;
