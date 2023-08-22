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
  };
  const onDelete = (id) => {
    setAddItem((prevData) =>
        prevData.filter((currData, index) =>{
          return (id !== index);
        })      
    );
  };
  const onEdit = (id) => {

  };
  return (
    <>
      <Header/>
      <CreateNote 
        passNote={addNote}
      />
      <div className='singleNotes'>
        {addItem.map((val, index) => {
          return (
            <Note
              key = {index}
              id = {index}
              title = {val.title}
              content = {val.content}
              DeleteNote = {onDelete}
              EditNote = {onEdit}
            />
          );
        })}
      </div>  
    </>
  );
}

export default App;
