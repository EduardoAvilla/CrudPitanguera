import React, { useState } from 'react';
import axios from 'axios';
import './assets/css/stilo.css';
import Teste2 from './Teste2'; 
 const Teste = (props) => {
  
  const [tarefas,setTarefas] =useState([
    'pagar a conta de luz','estudar hooks'
  ]);
 const [input,setInput] = useState('')
  function chama(){

     setTarefas([...tarefas,input]) 

     
  }
  return (
    <div className="flex">
      <div>
       
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={input}/> 
      <button onClick={chama} onChange={(e)=>setInput(e.target.value)}>Click</button>
      </div>
    </div>
  )
}

export default Teste;
