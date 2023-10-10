import { useSearchParams } from "react-router-dom";

import useScrollUp from "/src/hooks/useScrollUp";

const usePriceFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const priceLte = searchParams.get("price_lte");
  const priceGte = searchParams.get("price_gte");

  const currValue = `${priceGte},${priceLte ? priceLte : "MAX"}`;

  useScrollUp(300, [currValue]);

  function handleChange(e) {
    const {
      checked,
      dataset: { value },
    } = e.target;

    const valueArr = value.split(",");

    setSearchParams((params) => {
      if (checked) {
        params.set(`price_gte`, valueArr[0]);
        valueArr[1] !== "MAX"
          ? params.set(`price_lte`, valueArr[1])
          : params.delete("price_lte");
      } else {
        params.delete("price_gte");
        params.delete("price_lte");
      }

      return params;
    });
  }

  return { currValue, handleChange };
};

export default usePriceFilter;
