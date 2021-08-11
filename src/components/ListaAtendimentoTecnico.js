import React, { useState, createContext } from 'react';
import  { useContext } from 'react';
import '../assets/css/stilo.css';
import ListItem from './crud/ListItem2'
import NewTaskInput from './crud/NewTaskInput2'
import { UserContext } from '../Contexts/UserContext';
 const ListaAtendimentoTecnico = ( ) => {

  const [tasks, setTasks] = useState([]);
 


  function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({id: tasks.length, value: task});
    setTasks(itensCopy);
  }

  function updateTask({target}, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

  return (
    <div className="flex">
      <div>
        
      <NewTaskInput onSubmit={addNewTask} />
         {tasks.map(({id, value}, index) => (
          <ListItem 
            key={id}
            value={value}
            onChange={(event) => updateTask(event, index)}
            onDelete={() => deleteTask(index)}
                   
          />
      
         ))}
      </div>
      </div>
  )
}

export default ListaAtendimentoTecnico;
