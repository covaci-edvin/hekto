import styles from "./InputWithButton.module.scss";

function InputWithButton({ setInputValue, btnContent, placeholder, type }) {
  return (
    <div className={styles.container}>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type={type}
        className={`body-text-md ${styles.input}`}
        placeholder={placeholder}
      />
      <button type="submit" className={styles.button}>
        {btnContent}
      </button>
    </div>
  );
}

export default InputWithButton;
