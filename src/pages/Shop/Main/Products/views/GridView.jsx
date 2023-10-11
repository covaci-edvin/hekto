import styles from "./GridView.module.scss";
import VerticalProduct from "../../../../../components/cards/product/VerticalProduct";

function GridView({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <VerticalProduct product={product} key={product.id} />
      ))}
    </div>
  );
}

export default GridView;
