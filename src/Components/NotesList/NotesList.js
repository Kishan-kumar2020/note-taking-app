import React from "react";

import NoteItem from "../NoteItem/NoteItem";

import styles from "./NotesList.module.css";

const NotesList = ({ notesList, deleteNote }) => {
  return (
    <div className={styles.NotesList__wrapper}>
      {notesList.map((noteItem, index) => {
        return (
          <NoteItem
            key={noteItem.title}
            noteItem={noteItem}
            deleteNote={() => deleteNote(index)}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
