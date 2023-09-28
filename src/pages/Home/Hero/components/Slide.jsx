import Button from "/src/components/ui/Button";

import styles from "./Slide.module.scss";

import offerBgImg from "/src/assets/svgs/hero-offer-discount-bg.svg";

import { Link } from "react-router-dom";

function Slide({ offer }) {
  return (
    <div className={`u-section-content ${styles.container}`}>
      <div className={styles.slide}>
        <div className={styles.info}>
          <h2 className={`body-text-md-bold ${styles["display-text"]}`}>
            Best Furniture For Your Castle....
          </h2>
          <h1 className={`heading-1 ${styles["title"]}`}>{offer.title}</h1>
          <p className={`body-text-md ${styles["description"]}`}>
            {offer.description}
          </p>
          <Link to={`shop/${offer.id}`} className={styles.btn}>
            <Button>Shop Now</Button>
          </Link>
        </div>
        <div className={styles["img-container"]}>
          <img
            className={styles.img}
            src={`http://localhost:8080/${offer.image}`}
            loading="lazy"
          />
          <div className={styles["discount-container"]}>
            <img src={offerBgImg} className={styles["discount-bg"]} />
            <div className={`heading-3 ${styles["discount-text"]}`}>
              {offer.discount}% Off
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
