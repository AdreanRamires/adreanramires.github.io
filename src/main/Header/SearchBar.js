import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type in to Search ..."
      />
      <i className={`fas fa-search ${styles.i}`}></i>
    </div>
  );
};

export default SearchBar;
