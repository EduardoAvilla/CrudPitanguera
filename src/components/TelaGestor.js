import React, { useState,Component } from 'react';
import '../assets/css/stilo.css';
 import ListaAtendimento from './ListaAtendimento'
 import ListaAtendimentoTecnico from './ListaAtendimentoTecnico'
 import styled from "styled-components";
 import SetarId from './SetarId'
  import TelaRelatorio from './TelaRelatorio'
 function TelaGestor(props) {
   // Declare a new state variable, which we'll call "count"
   const [count, setCount] = useState(0);
   
    return (
    <section className="" id="fundo">
    <div id="navbar" className="p-3 mb-2 d-flex flex-column     bg-dark  text-light   "><h1>GESTÃO</h1></div>
 
<section className="justify-content-center align-items-center" id="Tabela">

<section id="LadoE" >
<div ><h3>Adicionar Atendimentos</h3></div>

<section id="lista">  <ListaAtendimento/></section>

 </section>
  <section id="LadoD">  

<h3>Adicionar Técnicos</h3>
<section id="lista">  <ListaAtendimentoTecnico/></section>


</section>


</section>
 
</section>
   );
 }

 export default TelaGestor;