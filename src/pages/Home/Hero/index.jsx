import { useState } from "react";

import OfferImgPreloader from "./OfferImgPreloader";
import HeroSlider from "./Slider";
import styles from "./index.module.scss";

import ImgBg from "/src/assets/svgs/hero-offer-bg.svg";
import ImgBgDesign from "/src/assets/imgs/hero-design-lamp.png";
import Error from "/src/components/ui/Error";
import { useFetch } from "/src/hooks/useFetch";

const OFFERS_URL = "http://localhost:3000/products?offer=true";

function Hero({ imgsPreloaded }) {
  const { data, isPending, error } = useFetch(OFFERS_URL);
  const [offerImgPreloaded, setOfferImgPreloaded] = useState(false);

  console.log({ data, isPending, error, imgsPreloaded, offerImgPreloaded });

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
        {data && !offerImgPreloaded && (
          <OfferImgPreloader
            data={data}
            setOfferImgPreloaded={setOfferImgPreloaded}
          />
        )}
        {error && <Error message={"Something went wrong :("} />}
        {(isPending || !offerImgPreloaded) && (
          <h1 className="heading-4">Loading...</h1>
        )}
        {data && offerImgPreloaded && (
          <HeroSlider
            data={data}
            setOfferImgPreloaded={setOfferImgPreloaded}
            offerImgPreloaded={offerImgPreloaded}
          />
        )}
      </div>
    </section>
  );
}

export default Hero;