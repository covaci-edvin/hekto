import partnersImg from "/src/assets/imgs/partners.jpg";

import styles from "./Partners.module.scss";

function Partners() {
  return (
    <section className={styles.container}>
      <img src={partnersImg} className={styles.img} />
    </section>
  );
}

export default Partners;
