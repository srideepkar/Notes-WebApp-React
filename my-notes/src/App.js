import React from 'react';
import './App.css';
import './Common.css';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header/>
      <CreateNote/>
      <div className='singleNotes'>
        <Note/>
      </div>
      <Footer/>      
    </>
  );
}

export default App;
