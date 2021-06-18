import data from "./data.json";

import Header from "./component/header"
import ToDoList from "./component/ToDoList";
import ToDoForm from './component/ToDoForm';
import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);


  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const constructTime = () => {
    const date = new Date();
    let hour = date.getHours();
    let ampm = "am";
    if (hour > 12){
      hour -= 12;
      ampm = "pm";
    }
    return `${(date.getMonth()+1)}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${hour+date.toString().substring(18, 24)+ampm}`
  }

  const addTask = (userInput ) => {
    
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, timeAdded: constructTime()}];
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
