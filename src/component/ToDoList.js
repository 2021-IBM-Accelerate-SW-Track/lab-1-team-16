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
const ToDoList = ({toDoList}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} deleteEntry={deleteEntry} />
                )
            })}
        </div>
    );
};

export default ToDoList;