import React from 'react';
import { Button } from '@material-ui/core';

import { TextField } from '@material-ui/core';

document.title = "Group 16 To Do List";

function updateEntry(n){
    var newId = n*-1;
    var divId = document.getElementById(newId);
    if (divId != null && n > 0){
        document.getElementById(newId).innerHTML = document.getElementById(n+.1).value;
        
    }  
}



const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    
    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} >
            <span id={todo.id*-1}>{todo.task} </span>
            <TextField id={todo.id+.1}  variant="outlined" placeholder="Enter updated task..." size="small"></TextField>
            <span><Button onClick={updateEntry(todo.id)} variant="contained" color="primary">Update</Button></span>

        </div>
    );
};

export default ToDo;
