import ActionButton from "./ActionButton";
import styles from "./Actions.module.scss";
import useProductLocalStorageAction from "../hooks/useProductLocalStorageAction";

function Actions({ type = "horizontal", productId }) {
  const { handler: cartHandler, isActive: cartIsActive } =
    useProductLocalStorageAction("cart", productId);

  const { handler: wishlistHandler, isActive: wishlistIsActive } =
    useProductLocalStorageAction("wishlist", productId);

  const classNames = `${styles.container} ${
    type === "vertical" ? styles.vertical : ""
  }`;

  return (
    <div className={classNames}>
      <ActionButton
        iconName="cart"
        onClick={cartHandler}
        itemKey={"cart"}
        isActive={cartIsActive}
      />
      <ActionButton
        iconName="heart"
        onClick={wishlistHandler}
        itemKey={"wishlist"}
        isActive={wishlistIsActive}
      />
      <ActionButton iconName="zoom-in" />
    </div>
  );
}

export default Actions;
