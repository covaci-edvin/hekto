import { useEffect, useMemo } from "react";

import useImagePreloader from "/src/hooks/useImagePreloader";

function OfferImgPreloader({ data, setOfferImgPreloaded }) {
  const firstImgSrc = useMemo(
    () => [`http://localhost:8080/${data[0].image}`],
    [data],
  );

  const { imagesPreloaded: offerImagePreloaded } =
    useImagePreloader(firstImgSrc);

  useEffect(() => {
    if (!offerImagePreloaded) return;
    setOfferImgPreloaded(true);
  }, [offerImagePreloaded, setOfferImgPreloaded]);

  return;
}

export default OfferImgPreloader;
