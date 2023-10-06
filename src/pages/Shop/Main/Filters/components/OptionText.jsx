import styles from "./OptionText.module.scss";

function CheckboxText({ children }) {
  return <p className={`body-text-md ${styles.text}`}>{children}</p>;
}

export default CheckboxText;
