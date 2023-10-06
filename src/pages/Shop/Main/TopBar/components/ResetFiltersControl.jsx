import { useNavigate } from "react-router-dom";

import styles from "./ResetFiltersControl.module.scss";

function ResetFiltersControl() {
  const navigate = useNavigate();

  function resetFiltersHandler() {
    navigate("?_page=1&_limit=10");
  }
  return (
    <button className={styles.reset} onClick={resetFiltersHandler}>
      <p className="body-text-md">Reset Filters</p>
    </button>
  );
}

export default ResetFiltersControl;
