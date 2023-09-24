import React, { useState } from "react";
import Icon from "../../ui/Icon";
import hektoLogo from "../../../assets/svgs/hekto-logo.svg";
import classes from "./Header.module.scss";
import HeaderSelectInput from "../../form/HeaderSelectInput";
import { Link, NavLink } from "react-router-dom";
import SearchInput from "../../form/SearchInput";

function Header() {
  const [searchParam, setSearchParam] = useState("");

  function handleIsActive({ isActive }) {
    return `body-text-md ${classes.navlink} ${isActive ? classes.active : ""}`;
  }

  function handleSearch(e) {
    e.preventDefault();

    //Search Logic
    console.log(searchParam);
  }

  return (
    <header>
      <div className={classes.topbar}>
        <div className={`u-section-content ${classes["topbar__content"]}`}>
          <div className={classes.contacts}>
            <a
              className={`subtitle-4 ${classes.link}`}
              href="mailto:mhhasanul@gmail.com"
            >
              <Icon iconName="envelope" />
              mhhasanul@gmail.com
            </a>
            <a className={`subtitle-4 ${classes.link}`} href="tel:(12345)67890">
              <Icon iconName="phone-call" />
              (12345)67890
            </a>
          </div>
          <div className={classes["nav-tools"]}>
            <form
              id="form-page-preferences"
              className={classes["preferences-form"]}
            >
              <HeaderSelectInput options={["english", "română", "русский"]} />
              <HeaderSelectInput options={["USD", "MDL", "EUR"]} />
            </form>
            <Link className={`subtitle-4 ${classes.linkBtn}`} to={"login"}>
              Login
              <Icon iconName={"profile"} />
            </Link>
            <Link className={`subtitle-4 ${classes.linkBtn}`} to={"wishlist"}>
              Wishlist
              <Icon iconName={"heart"} />
            </Link>
            <Link className={`subtitle-4 ${classes.linkBtn}`} to={"cart"}>
              <Icon iconName={"cart"} className={classes["cart-icon"]} />
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.navbar}>
        <div className={`u-section-content ${classes["navbar__content"]}`}>
          <nav className={classes.nav}>
            <img src={hektoLogo} className={classes.logo} />
            <NavLink to="" className={handleIsActive}>
              Home
            </NavLink>
            <NavLink to="shop" className={handleIsActive}>
              Shop
            </NavLink>
          </nav>
          <form onSubmit={handleSearch} className={classes["search-form"]}>
            <SearchInput setSearchParam={setSearchParam} />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;