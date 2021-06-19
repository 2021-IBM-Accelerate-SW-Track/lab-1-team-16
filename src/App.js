import data from "./data.json";

import Header from "./component/header"
import ToDoList from "./component/ToDoList";
import ToDoForm from './component/ToDoForm';
import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [ toDoList, setToDoList ] = useState([]);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  

  const addTask = ( userInput ) => {
    let copy = [...toDoList];
    let unique = true;
    for(let i=0; i<toDoList.length; i++){
      console.log(toDoList[i].task);
      if(toDoList[i].task === userInput){
        unique = false;
        window.alert("Duplicate Task!");
        break;
      }
    }
    if(unique === true)
      copy = [...copy, { id: toDoList.length + 1, task: userInput}];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
