import hektoLogo from "../../assets/svgs/hekto-logo.svg";
import classes from "./HektoLogo.module.scss";

function HektoLogo() {
  return <img src={hektoLogo} className={classes.logo} />;
}

export default HektoLogo;
