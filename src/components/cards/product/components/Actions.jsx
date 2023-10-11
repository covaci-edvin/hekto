import ActionButton from "./ActionButton";
import styles from "./Actions.module.scss";

function Actions({ type = "horizontal", productId }) {
  const cartItemKey = `cart-${productId}`;
  const wishlistItemKey = `wishlist-${productId}`;

  function onAddToCart() {
    if (!localStorage.getItem(cartItemKey)) {
      localStorage.setItem(cartItemKey, productId);
    } else {
      localStorage.removeItem(cartItemKey);
    }
  }

  function onAddToWishlist() {
    if (!localStorage.getItem(wishlistItemKey)) {
      localStorage.setItem(wishlistItemKey, productId);
    } else {
      localStorage.removeItem(wishlistItemKey);
    }
  }

  const classNames = `${styles.container} ${
    type === "vertical" ? styles.vertical : ""
  }`;
  return (
    <div className={classNames}>
      <ActionButton
        iconName="cart"
        onClick={onAddToCart}
        itemKey={cartItemKey}
      />
      <ActionButton
        iconName="heart"
        onClick={onAddToWishlist}
        itemKey={wishlistItemKey}
      />
      <ActionButton iconName="zoom-in" />
    </div>
  );
}

export default Actions;
