import { useMemo } from "react";

import useFetch from "/src/hooks/useFetch";
import useImagePreloader from "/src/hooks/useImagePreloader";

export default function useHeroData(url) {
  const { data, isPending, error } = useFetch(url);

  const firstImgSrc = useMemo(
    () => data && [`http://localhost:8080/${data[0].image}`],
    [data],
  );

  const { imagesPreloaded } = useImagePreloader(firstImgSrc);

  return { data, isPending, error, imagesPreloaded };
}
