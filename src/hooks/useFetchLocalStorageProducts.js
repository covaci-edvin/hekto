import { useMemo } from "react";

import useFetchProducts from "/src/hooks/useFetchProducts";

export default function useFetchLocalStorageProducts(key) {
  const productIds = useMemo(
    () => JSON.parse(localStorage.getItem(key)) || [],
    []
  );

  const { data, isPending } = useFetchProducts(productIds);

  return { data, isPending };
}
