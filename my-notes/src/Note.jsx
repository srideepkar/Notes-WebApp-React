import { Card } from '@mui/material';
import React from 'react';
import "./Common.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Note = (props) => {
    return(
        <>
            <Card className='singleNote'>
                <div className='inputField'>
                    <div className='input-group mb-3'>
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input 
                            type = 'text' 
                            name = 'title'
                            className="form-control" 
                            value = {props.title} 
                            disabled
                        />
                    </div>
                    <div className="input-group">
                        <textarea 
                            name = 'content'
                            className="form-control" 
                            aria-label="With textarea"
                            value = {props.content}
                            disabled
                        ></textarea>
                    </div>
                </div>
                <div className='buttonSet'>
                    <button 
                        type="button" 
                        className="button button6"
                    ><EditIcon sx={{fontSize: 30 }}/></button>
                    <button 
                        type="button" 
                        className="button button5"
                    ><DeleteIcon sx={{fontSize: 30 }}/></button>
                </div>
            </Card>
        </>
    );
}

export default Note;