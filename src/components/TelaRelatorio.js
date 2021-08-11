 
 import React, { useState, createContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import  { useContext } from 'react';
 
import '../assets/css/stilo.css';
 
const TelaRelatorio = () => {
  
   const {Tarefas,SetTarefas} = useContext(UserContext);

  return(

    <section className="" id="fundo">
    <div id="navbar" className="p-3 mb-2 d-flex flex-column     bg-dark  text-light"><h1>RELATORIO</h1></div>
 
    {<h1>Tarefas</h1>}
     <div id="relatorio" className="justify-content-center  d-flex flex-column text-light ">
 

     </div>
        
     
   
</section>
 
 
  )
}

export default TelaRelatorio;
