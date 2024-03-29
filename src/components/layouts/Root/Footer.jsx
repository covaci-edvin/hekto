import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

import SignUp from "/src/components/auth/SignUp";
import HektoLogo from "/src/components/ui/HektoLogo";
import Socials from "/src/components/ui/Socials";

const FOOTER_PAGES = [
  {
    title: "Categories",
    listItems: [
      "Laptops & Computers",
      "Cameras & Photography",
      "Smartphones & Tablets",
      "Video Games & Consoles",
      "Waterproof Headphones",
    ],
  },
  {
    title: "Customer Care",
    listItems: [
      "My Account",
      "Discount",
      "Returns",
      "Orders History",
      "Order Tracking",
    ],
  },
  {
    title: "Pages",
    listItems: [
      "Blog",
      "Browse the Shop",
      "Category",
      "WooCommerce Pages",
      "Order Tracking",
    ],
  },
];

function ListWithTitle({ title, listItems = [] }) {
  return (
    <div className={styles["list-container"]}>
      <h1 className="subtitle-2">{title}</h1>
      <ul className={styles.list}>
        {listItems.map((item) => (
          <li key={item} className={`body-text-md ${styles["list-item"]}`}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={`u-section-content ${styles["footer-content"]}`}>
          <div className={styles.info}>
            <Link to="">
              <HektoLogo />
            </Link>
            <SignUp />
            <div className={styles.contact}>
              <h1 className="body-text-md">Contact Info</h1>
              <p className="body-text-md">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>
          <div className={styles.pages}>
            {FOOTER_PAGES.map((item) => (
              <ListWithTitle
                key={item.title}
                title={item.title}
                listItems={item.listItems}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles["bottom-bar"]}>
        <div className={`u-section-content ${styles["bottom-bar-content"]}`}>
          <p className="body-text-md">&copy;Webecy - All Rights Reserved</p>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
