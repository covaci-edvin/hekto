import Details from "./components/Details";
import Images from "./components/Images";
import styles from "./index.module.scss";

function ProductDetails({ product }) {
  return (
    <section className={`u-section-content`}>
      <div className={styles.container}>
        <Images image={product.image} images={product.images} />
        <Details product={product} />
      </div>
    </section>
  );
}

export default ProductDetails;
