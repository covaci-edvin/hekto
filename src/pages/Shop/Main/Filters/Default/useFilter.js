import { useSearchParams } from "react-router-dom";

const useFilter = (filter) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = `${filter.name}_like`;

  const urlParams = searchParams.get(name)?.split("|");

  function handleChange(e) {
    const {
      checked,
      dataset: { value },
    } = e.target;

    setSearchParams((params) => {
      if (checked) {
        if (urlParams) {
          const newParamOptions = [...urlParams, value].join("|");
          params.set(name, newParamOptions);
        } else {
          params.append(name, value);
        }
      } else {
        const newParamOptions = urlParams
          .filter((option) => value !== option)
          .join("|");

        if (newParamOptions) {
          params.set(name, newParamOptions);
        } else {
          params.delete(name);
        }
      }

      return params;
    });
  }

  return {
    urlParams,
    handleChange,
  };
};

export default useFilter;
