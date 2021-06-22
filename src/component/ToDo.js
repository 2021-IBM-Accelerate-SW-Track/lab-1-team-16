import React from 'react';
import { Button } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';


const ToDo = ({todo, deleteEntry}) => {

    const handleClick = (e) => {
        e.preventDefault()
    }
    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} >
            <Checkbox></Checkbox>
            {todo.task} {todo.timeAdded}
            
            <Button id={todo.id} onClick={() => deleteEntry(todo.id)} variant="contained" color="secondary">Delete</Button>
        </div>
    );
};

export default ToDo;
