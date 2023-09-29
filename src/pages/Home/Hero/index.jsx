import Slider from "./components/Slider";
import styles from "./index.module.scss";

import ImgBg from "/src/assets/svgs/hero-offer-bg.svg";
import ImgBgDesign from "/src/assets/imgs/hero-design-lamp.png";
import Error from "/src/components/ui/Error";

import useHeroData from "./useHeroData";

const OFFERS_URL = "http://localhost:3000/products?offer=true";

function Hero({ imgsPreloaded }) {
  const {
    data,
    isPending,
    error,
    imagesPreloaded: offerImgPreloaded,
  } = useHeroData(OFFERS_URL);

  return (
    <section className={styles.section}>
      {imgsPreloaded && (
        <>
          <div className={styles["foreground-container"]}>
            <div className={`u-section-content ${styles.foreground}`}>
              <img
                src={ImgBgDesign}
                className={styles["design-bg"]}
                alt="floor lamp"
              />
            </div>
          </div>

          <div className={styles["background-container"]}>
            <div className={`u-section-content ${styles.background}`}>
              <img src={ImgBg} className={styles["product-img-bg"]} />
            </div>
          </div>
        </>
      )}

      <div className={styles.content}>
        {error && <Error message={"Something went wrong :("} />}
        {(isPending || !offerImgPreloaded) && (
          <h1 className="heading-4">Loading...</h1>
        )}
        {data && offerImgPreloaded && <Slider data={data} />}
      </div>
    </section>
  );
}

export default Hero;
