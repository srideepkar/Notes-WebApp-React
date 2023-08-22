import React, { useState } from 'react';
import "./Common.css";
import { Card } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    const InputEvent = (event) => {
        const {name, value} = event.target;
        setNote((prevData) =>{
            return {
                ...prevData,
                [name] : value,
            }
        })
        //console.log(note);
    }

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title: "",
            content: ""
    })
    }

    return(
        <>
            <Card className='createNote'>
                <div className='inputField'>
                    <div className='input-group mb-3'>
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input 
                            type = 'text' 
                            name = 'title'
                            value = {note.title}
                            className="form-control" 
                            placeholder="Title here.." 
                            onChange = {InputEvent}
                        />
                    </div>
                    <div class="input-group">
                        <textarea 
                            name = 'content'
                            value = {note.content}
                            className="form-control" 
                            aria-label="With textarea"
                            onChange = {InputEvent}
                            placeholder="Write Notes..." 
                        ></textarea>
                    </div>
                </div>    
                <button 
                    type="button" 
                    className="btn btn-primary btn-lg"
                    onClick={addEvent}
                ><ControlPointIcon sx={{ fontSize: 40 }}/></button>                
            </Card>
                        
        </>
    );
}

export default CreateNote;