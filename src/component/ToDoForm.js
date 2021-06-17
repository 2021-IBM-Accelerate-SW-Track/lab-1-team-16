import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');
    //this const is still broken
    const [ taskDone, setCheckBox ] = useState('');

  
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    
    //this method is still broken
    const handleClick = (e) => {
        setCheckBox(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput );
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
                //this makes the checkbox
            <input type="checkbox"  id = {"defaultunchecked"} display = "none" onChange={handleClick} style={{height: '20px', width : '15px'}}/>
            <Button onClick={handleSubmit}>Create</Button>
        </form>
    );
};

export default ToDoForm;
