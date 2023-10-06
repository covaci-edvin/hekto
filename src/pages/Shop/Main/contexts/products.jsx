import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import useFetch from "/src/hooks/useFetch";

const INITIAL_URL = "http://localhost:3000/products";

export const ProductsContext = React.createContext();

export function ProductsProvider({ children }) {
  const searchParams = useSearchParams()[0];
  const url = `${INITIAL_URL}?${searchParams.toString()}`;

  const { data: products, isPending, error, totalCount } = useFetch(url);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isPending,
        error,
        totalCount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
