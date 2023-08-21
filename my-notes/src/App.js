import React, { useState } from 'react';
import './App.css';
import './Common.css';
import CreateNote from './CreateNote';
import Header from './Header';
import Note from './Note';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    //alert("I'm clicked.");
    setAddItem((prevData) => {
      return [...prevData, note]
    })
  }
  return (
    <>
      <Header/>
      <CreateNote passNote={addNote}/>
      <div className='singleNotes'>
        {addItem.map((val, index) => {
          return (
            <Note
              key = {index}
              id = {index}
              title = {val.title}
              content = {val.content}
            />
          );
        })}
      </div>  
    </>
  );
}

export default App;
