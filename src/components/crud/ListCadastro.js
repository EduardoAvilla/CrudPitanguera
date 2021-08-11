import React, {useState, Component } from 'react'
import '../../assets/css/stilo.css'
import styled from "styled-components";

const ListCadastro = ({ onChange, onDelete, value }) => {
  const [checked, setChecked] = useState(false);
  const style = checked ?'toggle' : 'toggle checked'
   
  return (
    <section  className={style}>
    <div className="Item-container">
   
      <input
      type="text" className="form-control  bg-dark text-light"
      id="inputvalue"
        value={value}
        onChange={onChange}
      />
      
      <button className="bg-danger btn">Excluir</button><button onClick={() =>setChecked(!checked)} class="btn btn-secondary text-light">Desativar</button>
     
     
    </div>
    </section>
  );
};

export default ListCadastro;
