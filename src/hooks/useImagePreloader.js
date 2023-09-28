import { useEffect, useState } from "react";

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = img.onabort = function () {
      reject();
    };
    img.src = src;
  });
}

export default function useImagePreloader(imageList) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    async function effect() {
      const imagesPromiseList = imageList.map(preloadImage);
      await Promise.all(imagesPromiseList);
      setImagesPreloaded(true);
    }

    imageList && effect();
  }, [imageList]);

  return { imagesPreloaded };
}
