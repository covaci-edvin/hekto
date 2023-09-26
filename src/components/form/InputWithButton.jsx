import classes from "./InputWithButton.module.scss";

function InputWithButton({ setInputValue, btnContent, placeholder, type }) {
  return (
    <div className={classes.container}>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type={type}
        className={`body-text-md ${classes.input}`}
        placeholder={placeholder}
      />
      <button type="submit" className={classes.button}>
        {btnContent}
      </button>
    </div>
  );
}

export default InputWithButton;
