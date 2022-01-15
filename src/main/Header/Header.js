import React, { useState } from "react";
import styles from "./Header.module.css";
import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";
import Navigation from "../Mobile/Navigation";

const Header = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);

  const upStateHanlder = (upState) => {
    props.upState(upState);
  };

  return (
    <header className={styles.header}>
      <SearchBar />
      <ProfileMenu />
      <Navigation upState={upStateHanlder} />
    </header>
  );
};

export default Header;
