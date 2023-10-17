import { useEffect, useState } from "react";

import styles from "./Images.module.scss";

import { imagesBaseUrl } from "/src/utils/constants";

function Images({ image, images }) {
  const mainImageUrl = `${imagesBaseUrl}${image}`;

  const [activeImage, setActiveImage] = useState();

  useEffect(() => {
    if (images?.[0]) setActiveImage(`${imagesBaseUrl}${images[0]}`);
  }, [images]);

  function renderImages(images) {
    return images.map((image) => {
      const imgUrl = `${imagesBaseUrl}${image}`;
      const imgBtnClassNames = `${styles["img-sm-container"]} ${
        imgUrl === activeImage ? styles["img-active"] : ""
      }`;

      return (
        <button
          onClick={() => {
            setActiveImage(imgUrl);
          }}
          className={imgBtnClassNames}
          key={image}
        >
          <img src={imgUrl} className={styles.img} />
        </button>
      );
    });
  }

  return (
    <div className={styles.container}>
      {activeImage && (
        <>
          <div className={styles["imgs-sm-container"]}>
            {renderImages(images)}
          </div>
          <div className={styles["img-container"]}>
            <img src={activeImage} className={styles.img} />
          </div>
        </>
      )}

      {!activeImage && (
        <div className={styles["img-container"]}>
          <img src={mainImageUrl} className={styles.img} />
        </div>
      )}
    </div>
  );
}

export default Images;
