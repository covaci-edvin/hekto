import { useEffect, useMemo, useState } from "react";

import { useFetch } from "./useFetch";
import useImagePreloader from "./useImagePreloader";

export const useFetchAndPreloadImg = (url) => {
  const { data, isPending, error } = useFetch(url);
  const [offerImgPreloaded, setOfferImgPreloaded] = useState(false);

  const firstImgSrc = useMemo(() => {
    if (data) {
      return [`http://localhost:8080/${data[0].image}`];
    } else {
      return [];
    }
  }, [data]);

  const { imagesPreloaded: offerImagePreloaded } =
    useImagePreloader(firstImgSrc);

  useEffect(() => {
    if (!offerImagePreloaded) return;
    setOfferImgPreloaded(true);
  }, [offerImagePreloaded]);

  return { data, isPending, error, offerImgPreloaded };
};
