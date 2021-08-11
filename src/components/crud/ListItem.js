 import '../../assets/css/stilo.css'
import styled from "styled-components";
import React, {Component, useState, createContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import  { useContext } from 'react';

const ListItem = ({ onChange, onDelete, value }) => {
  const [checked, setChecked] = useState(false);
      const style = checked ?'toggle' : 'toggle checked'
      const {Tarefas,SetTarefas} = useContext(UserContext);

  
   function Setar( ){
    localStorage.setItem("Atendimentos",value)

     console.log("o SET TA FUNFANDO");
   //  console.log(localStorage.getItem("Atendimentos"))
    //  let X =localStorage.getItem("Atendimentos");
    //  console.log( localStorage.getItem("Atendimentos") )
  
    }

  return (
    <section id="Itens"  className={style}>
    <div className="Item-container  text-center">
   
      <input
      type="text" className="form-control  bg-dark text-light "
      id="inputvalue"
        value={value}
        onChange={onChange}
       
        
         /> 
      
          {Setar( )}
 
 
          
         
      <button className="bg-danger btn" onClick={onDelete}>Excluir</button><button onClick={() =>setChecked(!checked)} class="btn btn-secondary text-light">Desativar</button>
     
     </div>
    </section>
  );
};

export default ListItem;
