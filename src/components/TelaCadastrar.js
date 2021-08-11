import React from 'react';
import '../assets/css/stilo.css'

class TelaCadastrar extends React.Component {
  render() {

    
    return(  
    <section class="" id="fundo">
  
<section class="row justify-content-center " id="Tabela">
<div id="title_container" class="p-3 mb-2     text-dark      align-items-center  "><h1 id="titulo">Cadastro de clientes</h1>

</div>  

<section className="d-flex"  id="inputs">

<form class="row g-3 justify-content-center align-items-center">
  <div class="col-md-6">
    <label for="input" class="form-label">Nome do cliente</label>
    <input type="text" class="form-control" id="input"/>
  </div>
  <div class="col-md-6">
    <label for="input" class="form-label">Tipo de atendimento</label>
    <input type="text" class="form-control" id="input"/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress " class="form-label ">Técnico responsável</label>
    <input type="text" class="form-control "  disabled    id="inputAddress"/>
  </div>
  
  <div class="col-md-6  ">
  <label for="example-datetime-local-input" class="col-12 col-form-label">Data do atendimento</label>
  <div class="col-md-6">
    <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input"/>
  </div>
</div>
 
  <div class="col-md-12">
    <label for="exampleTextarea">Observação</label>
    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
  </div>
 
   
  <div class="col-3 ">
  <button type="submit" class="btn-lg btn-dark  ">Cadastrar</button>
  <button id="botao"  type="submit" class="btn-lg btn-dark  ">Limpar</button>
  </div>
</form>
</section>


</section>





































</section>

    );}
}

export default TelaCadastrar;
