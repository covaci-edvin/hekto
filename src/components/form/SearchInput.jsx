import Icon from "../ui/Icon";
import classes from "./SearchInput.module.scss";

function SearchInput({ setSearchParam }) {
  return (
    <div className={classes.container}>
      <input
        onChange={(e) => {
          setSearchParam(e.target.value);
        }}
        type="text"
        className={`body-text-md ${classes.input}`}
        placeholder="Search"
      />
      <button type="submit" className={classes.button}>
        <Icon iconName="search" className={classes.icon} />
      </button>
    </div>
  );
}

export default SearchInput;
