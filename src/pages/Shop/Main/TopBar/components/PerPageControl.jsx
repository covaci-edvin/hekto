import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CustomSelectInput from "/src/components/form/CustomSelectInput";
import { limitKey } from "/src/utils/constants";

const perPageOptions = [
  { text: 5, value: 5 },
  { text: 10, value: 10 },
  { text: 15, value: 15 },
  { text: 30, value: 30 },
];

function PerPageControl() {
  const [perPage, setPerPage] = useState(perPageOptions[1]);

  const [searchParams, setSearchParams] = useSearchParams();

  const limit = searchParams.get(limitKey);

  useEffect(() => {
    setPerPage({ text: limit, value: limit });
  }, [limit]);

  function onHandleLimit(value) {
    setSearchParams((params) => {
      params.set(limitKey, value);
      return params;
    });
  }

  return (
    <CustomSelectInput
      options={perPageOptions}
      defaultOption={perPage}
      title="Per Page:"
      onChange={onHandleLimit}
    />
  );
}

export default PerPageControl;
