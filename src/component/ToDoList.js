import React from 'react';
import ToDo from './ToDo';

function deleteEntry(n){
    var divId = document.getElementById(n);
    if (divId != null){
        while (divId.firstChild){
            divId.removeChild(divId.firstChild);
        };
    }
}
const ToDoList = ({toDoList, handleToggle}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} deleteEntry={deleteEntry} handleToggle={handleToggle} />
                )
            })}
        </div>
    );
};

export default ToDoList;