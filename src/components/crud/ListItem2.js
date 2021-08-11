 import React, {useState, Component } from 'react'
import '../../assets/css/stilo.css'
import styled from "styled-components";

const ListItem2 = ({ onChange, onDelete, value }) => {
  const [checked, setChecked] = useState(false);
  const style = checked ?'toggle' : 'toggle checked'
  function Setar( ){
    localStorage.setItem("Tecnicos",value)

     console.log("o SET TA FUNFANDO");
   //  console.log(localStorage.getItem("Tecnicos"))
    //  let X =localStorage.getItem("Tecnicos");
    //  console.log( localStorage.getItem("Tecnicos") )
  
    }
  const tecnicos = [];
  return (
    <section id="Itens" className={style}>
    <div className="Item-container">
   
      <input
      type="text" className="form-control  bg-dark text-light"
      id="inputvalue"
        value={value}
        onChange={onChange}
      />
      
      <button className="bg-danger btn" onClick={onDelete}>Excluir</button><button onClick={() =>setChecked(!checked)} class="btn btn-secondary text-light">Desativar</button>
     
     
    </div>
    </section>
  );
};

export default ListItem2;
