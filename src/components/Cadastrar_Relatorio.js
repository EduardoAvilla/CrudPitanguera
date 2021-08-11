import React, { useState } from 'react';
import '../assets/css/stilo.css';
import ListCadastro from './crud/ListCadastro'
import NewTaskCadastro from './crud/NewTaskCadastro'

const Cadastrar_Relatorio = () => {
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

 

  return (
    <div className="flex">
      <div>
        
        <NewTaskCadastro onSubmit={addNewTask} />
        {tasks.map(({id, value}, index) => (
          <ListCadastro 
            key={id}
            value={value}
            onChange={(event) => updateTask(event, index)}
                    
          />
         ))}
      </div>
     
    </div>
  )
}

export default Cadastrar_Relatorio;
