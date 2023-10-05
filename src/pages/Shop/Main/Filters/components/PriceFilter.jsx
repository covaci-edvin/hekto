import { useSearchParams } from "react-router-dom";

import styles from "./DefaultFilter.module.scss";

import CheckboxInput from "/src/components/form/CheckboxInput";
import { capitalizeFirstLetter } from "/src/utils/utilityFunctions";

function PriceFilter({ filter }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const priceLte = searchParams.get("price_lte");
  const priceGte = searchParams.get("price_gte");

  const currValue = `${priceGte},${priceLte ? priceLte : "MAX"}`;

  function handleChange(e) {
    const isChecked = e.target.checked;
    const value = e.target.dataset.value;
    const valueArr = value.split(",");

    if (!isChecked && currValue === value) {
      setSearchParams((params) => {
        params.delete("price_gte");
        params.delete("price_lte");
        return params;
      });
    }

    if (isChecked) {
      setSearchParams((params) => {
        params.set(`price_gte`, valueArr[0]);
        value[1] !== "MAX"
          ? params.set(`price_lte`, valueArr[1])
          : params.delete("price_lte");
        return params;
      });
    }
  }

  function formatPriceText(option) {
    return `$${option[0].toFixed(2)}
    ${option[1] === "MAX" ? " +" : ` - $${option[1].toFixed(2)}`}`;
  }

  return (
    <div className={styles.container}>
      <h1 className={`subtitle-3 ${styles.title}`}>
        {capitalizeFirstLetter(filter.name)}
      </h1>
      <form id={filter.name} className={styles.options}>
        {filter.options.map((option, index) => {
          return (
            <CheckboxInput
              key={index}
              color={filter.color}
              dataValue={option}
              isChecked={currValue === option.join()}
              onChange={handleChange}
            >
              <p className={`body-text-md ${styles["checkbox-text"]}`}>
                {formatPriceText(option)}
              </p>
            </CheckboxInput>
          );
        })}
      </form>
    </div>
  );
}

export default PriceFilter;
