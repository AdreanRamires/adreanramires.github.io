import React from "react";
import styles from "./Header.module.css";
import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";
import Navigation from "../Mobile/Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <SearchBar />
      <ProfileMenu />
      <Navigation/>
    </header>
  );
};

export default Header;
