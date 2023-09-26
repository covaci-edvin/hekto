import styles from "./HektoLogo.module.scss";

import hektoLogo from "/src/assets/svgs/hekto-logo.svg";

function HektoLogo() {
  return <img src={hektoLogo} className={styles.logo} />;
}

export default HektoLogo;
