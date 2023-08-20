import React from 'react';
import "./Common.css";
import { Card } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const CreateNote = () => {
    return(
        <>
            <Card className='createNote'>
                <div className='inputField'>
                    <div className='input-group mb-3'>
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input 
                            type = 'text' 
                            name = 'title'
                            className="form-control" 
                            placeholder="Title here.." 
                        />
                    </div>
                    <div class="input-group">
                        <textarea 
                            className="form-control" 
                            aria-label="With textarea"
                            placeholder="Write Notes..." 
                        ></textarea>
                    </div>
                </div>    
                <button 
                    type="button" 
                    className="btn btn-primary btn-lg"
                ><ControlPointIcon sx={{ fontSize: 40 }}/></button>                
            </Card>
                        
        </>
    );
}

export default CreateNote;