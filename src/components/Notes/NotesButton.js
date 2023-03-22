import React from "react";
import "../Styles/StyleNotes.css"

export default function NotesButton({ type, message, onClick }) {
  return (
    <button className="Button" onClick={onClick}>
      {message}
    </button>
  );
}
