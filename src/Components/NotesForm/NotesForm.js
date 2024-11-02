import React, { useState } from "react";

import styles from "./NotesForm.module.css";

const NotesForm = ({ setNotesList }) => {
  const [notesData, setNotesData] = useState({
    title: "",
    content: "",
  });

  const { title, content } = notesData;

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNotesData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleOnClick = () => {
    setNotesList((prevNotes) => [
      ...prevNotes,
      {
        title,
        content,
      },
    ]);
    setNotesData({
      title: "",
      content: "",
    });
  };

  return (
    <div className={styles.notesForm__wrapper}>
      <div className={styles.notesForm__title}>
        <label className={styles.notesForm__titleLabel} htmlFor="title">
          Title
        </label>
        <input
          className={styles.notesForm__titleInput}
          name="title"
          type="text"
          placeholder="Enter Your Notes Title"
          value={title}
          onChange={handleOnChange}
        />
      </div>
      <div className={styles.notesForm__content}>
        <label className={styles.notesForm__contentLabel} htmlFor="title">
          Content
        </label>
        <textarea
          className={styles.notesForm__contentInput}
          name="content"
          type="text"
          placeholder="Enter Your Notes Content"
          value={content}
          onChange={handleOnChange}
        />
      </div>
      <button className={styles.notesForm__button} onClick={handleOnClick}>
        Add +
      </button>
    </div>
  );
};

export default NotesForm;
