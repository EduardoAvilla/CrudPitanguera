import React, { useState, createContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import  { useContext } from 'react';
 
const NewTaskInput = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');
  const {Tarefas,SetTarefas} = useContext(UserContext);
  //AQUI TEM O CODIGO Q TANTO PROCUREI
  /*function valor(){
    setSim([...sim, NewTaskInput]) 
    console.log(sim);
  }*/
  function setNewTask({target}) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div id="Itens">
      <form onSubmit={submit}>
        <input
          className="Todo-input form-control  bg-dark text-light text-center"
           onChange={setNewTask}
        />
        <br></br>
         <button type="submit" className=" btn bg-dark text-light" onClick={  () => SetTarefas(localStorage.getItem("Atendimento"))}>
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default NewTaskInput;
