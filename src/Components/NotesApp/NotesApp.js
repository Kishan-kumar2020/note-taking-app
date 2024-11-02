import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import NotesForm from "../NotesForm/NotesForm";
import NotesList from "../NotesList/NotesList";

import styles from "./NotesApp.module.css";

function NotesApp() {
  const [notesList, setNotesList] = useState(() => {
    const savedNotes = localStorage.getItem("notesList");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [searchText, setSearchText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  const [mode, setMode] = useState({
    modeText: "Light",
    value: true,
  });

  useEffect(() => {
    localStorage.setItem("notesList", JSON.stringify(notesList));
  }, [notesList]);

  const deleteNote = (indexToDelete) => {
    setNotesList((prevNotes) =>
      prevNotes.filter((_, index) => {
        return index !== indexToDelete;
      })
    );
  };

  useEffect(() => {
    if (searchText !== "") {
      const filtered = notesList.filter((noteItem) => {
        return noteItem.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(notesList);
    }
  }, [searchText, notesList]);

  return (
    <div className={styles.notes__parent} style={{ backgroundColor: mode.value ? "lightslategray" : "white" }}>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        mode={mode}
        setMode={setMode}
      />
      <NotesForm setNotesList={setNotesList} mode={mode} />
      <NotesList
        notesList={filteredNotes}
        deleteNote={deleteNote}
        mode={mode}
      />
    </div>
  );
}

export default NotesApp;
