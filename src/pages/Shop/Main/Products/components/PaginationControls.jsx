import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./PaginationControls.module.scss";
import { useProducts } from "../../products-context";

function PaginationControls() {
  const { totalCount } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParamValue = searchParams.get("_page");
  const perPageParamValue = searchParams.get("_limit");

  const nrOfPages = Math.ceil(totalCount / perPageParamValue);

  useEffect(() => {
    nrOfPages > 0 &&
      nrOfPages < pageParamValue &&
      setSearchParams((params) => {
        params.set("_page", 1);
        return params;
      });
  }, [nrOfPages]);

  useEffect(() => {
    !searchParams.has("_page") &&
      !searchParams.has("_limit") &&
      setSearchParams((params) => {
        params.append("_page", 1);
        params.append("_limit", 10);
        return params;
      });
  }, []);

  function setPage(pageNr) {
    setSearchParams((params) => {
      params.set("_page", pageNr);
      return params;
    });
  }

  function renderControls(nrOfPages) {
    return [...Array(nrOfPages)].map((_, index) => {
      const styleClasses = `body-text-md-bold ${styles["page-number"]} ${
        +pageParamValue === index + 1 ? styles.active : ""
      }`;

      return (
        <span
          key={index}
          className={styleClasses}
          onClick={() => {
            +pageParamValue !== index + 1 && setPage(index + 1);
          }}
        >
          {index + 1}
        </span>
      );
    });
  }

  return (
    <div className={styles.container}>
      {nrOfPages ? renderControls(nrOfPages) : renderControls(1)}
    </div>
  );
}

export default PaginationControls;
