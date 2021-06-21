import React from 'react';
import { Button } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';




const ToDo = ({todo, handleToggle, deleteEntry}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} >
            <Checkbox></Checkbox>
            {todo.task}
            
            <Button onClick={() => deleteEntry(todo.id)} variant="contained" color="secondary">Delete</Button>
        </div>
    );
};

export default ToDo;
