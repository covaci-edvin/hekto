import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useProducts } from "../../products-context";

const usePagination = () => {
  const { totalCount } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const resetPage = useCallback(
    () =>
      setSearchParams((params) => {
        params.set("_page", 1);
        return params;
      }),
    [],
  );

  const addParams = useCallback(
    () =>
      setSearchParams((params) => {
        params.append("_page", 1);
        params.append("_limit", 10);
        return params;
      }),
    [],
  );

  const setPage = (page) => {
    setSearchParams((params) => {
      params.set("_page", page);
      return params;
    });
  };

  const currentPage = +searchParams.get("_page");
  const limit = +searchParams.get("_limit");
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
