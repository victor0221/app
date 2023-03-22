import { React, useState } from "react";
import NotesButton from "./NotesButton";
import Notify from "../Notify";
import NoteData from "../Data/Data";
import "../Styles/StyleNotes.css"

export default function NotesPage() {
  const [notes, setNotes] = useState(NoteData);
  const [showNotify, setShowNotify] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleNoteChange = (event) => {
    const updatedNote = {
      ...selectedNote,
      note: event.target.value,
    };
    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(updatedNote);
  };

  const renderedNotes = notes.map((note) => {
    return (
      <li key={note.id} onClick={() => handleNoteClick(note)}>
        {note.id === selectedNote?.id ? (
          <input type="text" value={selectedNote.note} onChange={handleNoteChange} />
        ) : (
          <div>{note.note}</div>
        )}
      </li>
    );
  });

  const handleClick = () => {
    setShowNotify(true);
    setTimeout(() => {
      setShowNotify(false);
    }, 3000);
    console.log(notes);
  };

  return (
    <div className="Wrapper">
      <div className="Title">Notes</div>
      <ul className="List">{renderedNotes}</ul>
      <div className="ButtonWrapper">
        <NotesButton type="CallData" message="Check Data" onClick={handleClick} />
      </div>
      {showNotify && <Notify type="--" message={"Current Data Logged To Console"} />}
    </div>
  );
}


