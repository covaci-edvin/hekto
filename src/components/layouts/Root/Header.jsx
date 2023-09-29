import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

import HeaderSelectInput from "/src/components/form/HeaderSelectInput";
import Search from "/src/components/search/Search";
import HektoLogo from "/src/components/ui/HektoLogo";
import Icon from "/src/components/ui/Icon";

function Header() {
  function handleIsActive({ isActive }) {
    return `body-text-md ${styles.navlink} ${isActive ? styles.active : ""}`;
  }

  return (
    <header>
      <div className={styles.topbar}>
        <div className={`u-section-content ${styles.topbar__content}`}>
          <div className={styles.contacts}>
            <a
              className={`subtitle-4 ${styles.link}`}
              href="mailto:mhhasanul@gmail.com"
            >
              <Icon iconName="envelope" />
              mhhasanul@gmail.com
            </a>
            <a className={`subtitle-4 ${styles.link}`} href="tel:(12345)67890">
              <Icon iconName="phone-call" />
              (12345)67890
            </a>
          </div>
          <div className={styles["nav-tools"]}>
            <form
              id="form-page-preferences"
              className={styles["preferences-form"]}
            >
              <HeaderSelectInput options={["english", "română", "русский"]} />
              <HeaderSelectInput options={["USD", "MDL", "EUR"]} />
            </form>
            <Link className={`subtitle-4 ${styles.linkBtn}`} to={"login"}>
              Login
              <Icon iconName={"profile"} />
            </Link>
            <Link className={`subtitle-4 ${styles.linkBtn}`} to={"wishlist"}>
              Wishlist
              <Icon iconName={"heart"} />
            </Link>
            <Link className={`subtitle-4 ${styles.linkBtn}`} to={"cart"}>
              <Icon iconName={"cart"} className={styles["cart-icon"]} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={`u-section-content ${styles.navbar__content}`}>
          <nav className={styles.nav}>
            <Link to="">
              <HektoLogo />
            </Link>
            <NavLink to="" className={handleIsActive}>
              Home
            </NavLink>
            <NavLink to="shop" className={handleIsActive}>
              Shop
            </NavLink>
          </nav>
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
