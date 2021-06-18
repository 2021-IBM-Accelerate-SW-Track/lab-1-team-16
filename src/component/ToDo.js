import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} >
            {`${todo.task} ${todo.timeAdded}`}
        </div> // When the code above is {todo.task}, undefined undefined if not there.
    );
};

export default ToDo;