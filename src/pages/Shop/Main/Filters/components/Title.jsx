import { capitalizeFirstLetter } from "/src/utils/utilityFunctions";

import styles from "./Title.module.scss";

function Title({ title }) {
  return (
    <h1 className={`subtitle-3 ${styles.title}`}>
      {capitalizeFirstLetter(title)}
    </h1>
  );
}

export default Title;
