import React from "react";

import styles from "./Header.module.css";

const Header = ({ searchText, setSearchText, mode, setMode }) => {
  const { modeText, value } = mode;

  const handleOnClick = () => {
    setMode((prevValue) => ({
      ...prevValue,
      modeText: modeText === "Dark" ? "Light" : "Dark",
      value: !value,
    }));

    console.log(mode);
  };

  return (
    <div className={styles.header__wrapper}>
      <h1 className={styles.header__title}>NotesApp</h1>
      <div className={styles.header__widgets}>
        <input
          className={styles.header__widgetsSearch}
          type="search"
          placeholder="Search by Title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.header__widgetsMode} onClick={handleOnClick}>
          {modeText}
        </button>
      </div>
    </div>
  );
};

export default Header;
