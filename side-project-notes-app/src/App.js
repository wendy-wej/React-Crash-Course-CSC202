import React from "react";
import { useState } from "react";
import {nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my First Note!",
    date: "7/5/2022"
  },
  {
    id: nanoid(),
    text: "This is my Second Note!",
    date: "23/5/2022"
  },
  {
    id: nanoid(),
    text: "This is my Third Note!",
    date: "14/5/2022"
  },
  {
    id: nanoid(),
    text: "This is my Last Note!",
    date: "14/5/2022"
  }
]);

  const addNote = (text)=>{
    const date = new Date();
    const newNote ={
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return(
    <div className="container">
      <NotesList notes={notes}
        handleAddNote = {addNote}/>
    </div>
  )
}

export default App;