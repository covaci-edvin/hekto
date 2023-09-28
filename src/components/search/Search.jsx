import { useState } from "react";

import styles from "./Search.module.scss";

import InputWithButton from "/src/components/form/InputWithButton";
import Icon from "/src/components/ui/Icon";

function Search() {
  const [searchParam, setSearchParam] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    console.log(searchParam); // TODO: Add Search Logic
  }

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <InputWithButton
        btnContent={<Icon iconName="search" className={styles.icon} />}
        setInputValue={setSearchParam}
        placeholder="Search"
        type="text"
      />
    </form>
  );
}

export default Search;
