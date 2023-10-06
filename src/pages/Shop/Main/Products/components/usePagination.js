import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { limitKey, pageKey } from "/src/utils/constants";

import { useProducts } from "../../contexts/products";

const usePagination = () => {
  const { totalCount } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const resetPage = useCallback(
    () =>
      setSearchParams((params) => {
        params.set(pageKey, 1);
        return params;
      }),
    [],
  );

  const addParams = useCallback(
    () =>
      setSearchParams((params) => {
        params.append(pageKey, 1);
        params.append("_limit", 10);
        return params;
      }),
    [],
  );

  const setPage = (page) => {
    setSearchParams((params) => {
      params.set(pageKey, page);
      return params;
    });
  };

  const currentPage = +searchParams.get(pageKey);
  const limit = +searchParams.get(limitKey);
  useEffect(() => {
    const areThereNoParams = !currentPage && !limit;

    areThereNoParams && addParams();
  }, []);

  const numberOfPages = Math.ceil(totalCount / limit);
  useEffect(() => {
    const shouldReset = numberOfPages > 0 && numberOfPages < currentPage;

    shouldReset && resetPage();
  }, [numberOfPages]);

  return { currentPage, setPage, numberOfPages };
};

export default usePagination;
