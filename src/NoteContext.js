import React, { createContext, useState } from "react";

export const NoteContext = createContext({
  notes: [],
  fetchNotes: () => {},
  createNote: (title, body) => {},
});

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = () => {
    fetch("http://localhost:3004/entries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotes(data);
        console.log("notes fetched!!!");
      })
      .catch((error) => console.log(error));
  };

  const createNote = (title, body) => {
    // Promise<object>
    return fetch("http://localhost:3004/entries", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        thoughts: body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        fetchNotes();
        return res.json();
      })
      .catch((error) => console.log(error));
  };

  return (
    <NoteContext.Provider value={{ notes, fetchNotes, createNote }}>
      {children}
    </NoteContext.Provider>
  );
};
