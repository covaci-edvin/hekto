import classes from "./HektoLogo.module.scss";
import hektoLogo from "/src/assets/svgs/hekto-logo.svg";

function HektoLogo() {
  return <img src={hektoLogo} className={classes.logo} />;
}

export default HektoLogo;
