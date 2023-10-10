import styles from "./ListView.module.scss";

import ProductCard from "/src/components/cards/product/HorizontalProduct";

function ListView({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ListView;
