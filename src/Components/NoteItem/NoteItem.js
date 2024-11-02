import React from "react";

import styles from "./NoteItem.module.css";

const NoteItem = ({ noteItem, deleteNote }) => {
  const { title, content } = noteItem;

  return (
    <div className={styles.noteItem__wrapper}>
      <div className={styles.noteItem__title}>{title}</div>
      <div className={styles.noteItemcontent}>{content}</div>
      <div className={styles.notesItem__deleteBtn} onClick={deleteNote}>X</div>
    </div>
  );
};

export default NoteItem;
