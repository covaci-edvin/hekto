import CheckboxInput from "/src/components/form/CheckboxInput";
import { capitalizeFirstLetter } from "/src/utils/utilityFunctions";

import styles from "./DefaultFilter.module.scss";

import Rating from "/src/components/ui/Rating";

import { useSearchParams } from "react-router-dom";

import ColorFilterSelector from "./ColorFilterSelector";

function addValueToArray(array, value) {
  const index = array.indexOf(value);
  if (index === -1) {
    array.push(value);
  }
  return array;
}

function removeValueFromArray(array, value) {
  const index = array.indexOf(value);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

function DefaultFilter({ filter }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramName = `${filter.name}_like`;

  const paramFromUrl =
    searchParams.has(paramName) && searchParams.get(paramName).split("|");

  function handleChange(e) {
    const isChecked = e.target.checked;
    const value = e.target.dataset.value;

    if (isChecked) {
      if (!paramFromUrl) {
        setSearchParams((params) => {
          params.append(paramName, value);
          return params;
        });
        return;
      }

      const newParamValue = addValueToArray(paramFromUrl, value).join("|");

      setSearchParams((params) => {
        params.set(paramName, newParamValue);
        return params;
      });
    }

    if (!isChecked) {
      const newParamValues = removeValueFromArray(paramFromUrl, value);
      const newParamValue =
        newParamValues.length > 0 ? newParamValues.join("|") : false;

      if (!newParamValue) {
        setSearchParams((params) => {
          params.delete(paramName);
          return params;
        });
        return;
      }

      setSearchParams((params) => {
        params.set(paramName, newParamValue);
        return params;
      });
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={`subtitle-3 ${styles.title}`}>
        {capitalizeFirstLetter(filter.name)}
      </h1>
      <form
        id={filter.name}
        className={
          filter.name !== "color" ? styles.options : styles["color-options"]
        }
      >
        {filter.options.map((option, index) => {
          if (filter.name === "rating") {
            return (
              <CheckboxInput
                key={option}
                color={filter.color}
                dataValue={option}
                isChecked={paramFromUrl && paramFromUrl.includes(`${option}`)}
                onChange={handleChange}
              >
                <Rating nrOfStars={option} />
              </CheckboxInput>
            );
          }
          if (filter.name === "color") {
            return (
              <CheckboxInput
                key={index}
                color={filter.color}
                dataValue={option}
                type={"color-filter"}
                isChecked={paramFromUrl && paramFromUrl.includes(`${option}`)}
                onChange={handleChange}
              >
                <ColorFilterSelector color={option} />
              </CheckboxInput>
            );
          }
          if (filter.name === "discount") {
            return (
              <CheckboxInput
                key={index}
                color={filter.color}
                dataValue={option}
                isChecked={paramFromUrl && paramFromUrl.includes(`${option}`)}
                onChange={handleChange}
              >
                <p className={`body-text-md ${styles["checkbox-text"]}`}>
                  {option}%
                </p>
              </CheckboxInput>
            );
          }
          return (
            <CheckboxInput
              key={index}
              color={filter.color}
              dataValue={option}
              className={`body-text-md ${styles["checkbox-text"]}`}
              isChecked={paramFromUrl && paramFromUrl.includes(`${option}`)}
              onChange={handleChange}
            >
              <p className={`body-text-md ${styles["checkbox-text"]}`}>
                {capitalizeFirstLetter(option)}
              </p>
            </CheckboxInput>
          );
        })}
      </form>
    </div>
  );
}

export default DefaultFilter;
