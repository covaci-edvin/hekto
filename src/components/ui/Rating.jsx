import Icon from "./Icon.jsx";
import styles from "./Rating.module.scss";

function Rating({ nrOfStars }) {
  return (
    <span className={styles.container}>
      {[...Array(5)].map((_, index) => {
        const styleClasses = `${styles.star} ${
          index < nrOfStars ? styles.rated : ""
        }`;
        return <Icon iconName="star" className={styleClasses} key={index} />;
      })}
    </span>
  );
}

export default Rating;
