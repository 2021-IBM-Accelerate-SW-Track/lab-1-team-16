import React from 'react';
import { Button } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { TextField } from '@material-ui/core';



const ToDo = ({todo, deleteEntry}) => {

    const handleClick = (e) => {
        e.preventDefault()
    }

    function updateEntry(n){
        
        var newId = n*-1;
        var divId = document.getElementById(newId);
        if (divId != null && n > 0){
            document.getElementById(newId).innerHTML = document.getElementById(n+.1).value;
        todo.task = document.getElementById(n+.1).value;
        }  
    }

    function deleteEntries(n){
        var divId = document.getElementById(n);
        if (divId != null){
            while (divId.firstChild){
                divId.removeChild(divId.firstChild);
            };
        }
        todo.task += "(Deleted)";
    }
    
    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} >
            <Checkbox></Checkbox>
            <span id={todo.id*-1}>{todo.task}</span> {todo.timeAdded}
            
            <TextField id={todo.id+.1}  variant="outlined" placeholder="Enter updated task..." size="small"></TextField>
            <Button onClick={() => updateEntry( todo.id)} variant="contained" color="primary">Update</Button>
            <Button id={todo.id} onClick={() => deleteEntries(todo.id)} variant="contained" color="secondary">Delete</Button>
        </div>
    );
};

export default ToDo;
