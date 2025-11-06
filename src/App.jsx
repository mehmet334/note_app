import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [color, setColor] = useState("#f06292"); // varsayılan pembe
  const [search, setSearch] = useState("");

  const colors = ["#f06292", "#ba68c8", "#64b5f6", "#4db6ac", "#aed581"];

  const addNote = () => {
    if (!text.trim()) return;
    const newNote = {
      id: Date.now(),
      text,
      color,
    };
    setNotes([newNote, ...notes]);
    setText("");
  };

  const filteredNotes = notes.filter((n) =>
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>NotesApp</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="note-input">
        <textarea
          placeholder="Enter your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="color-picker">
          {colors.map((c) => (
            <span
              key={c}
              onClick={() => setColor(c)}
              style={{
                backgroundColor: c,
                border: color === c ? "3px solid #444" : "none",
              }}
            ></span>
          ))}
        </div>

        <button className="add-btn" onClick={addNote}>
          ADD
        </button>
      </div>

      <div className="notes-list">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="note"
            style={{ backgroundColor: note.color }}
          >
            {note.text}
          </div>
        ))}
      </div>
    </div>
  );
}
