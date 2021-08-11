import React, {useState, Component } from 'react'
import '../../assets/css/stilo.css'
import styled from "styled-components";
import TelaCadastrar from '../TelaCadastrar'
import SetarId from '../SetarId'
const NewCadastro = ({ onChange, value }, props) => {
  const [checked, setChecked] = useState(false);
  const style = checked ?'toggle' : 'toggle checked'
  
  const tecnicos = [];
  <TelaCadastrar/>
  return (
    <section  className={style}>
    <div className="Item-container">
   
      <TelaCadastrar/>
 
    </div>
    </section>
  );
};

export default NewCadastro;
