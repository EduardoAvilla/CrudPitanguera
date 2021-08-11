import React from 'react';
import '../assets/css/stilo.css'

class RelatorioDeCadastrados extends React.Component {
  render() {

    
    return(  
    <section class="" id="fundo">
  
<section class="row justify-content-center " id="Tabela">
  
<section className="d-flex"  id="inputs">

<form class="row g-3 justify-content-center align-items-center">
  <div class="col-md-6">
    <label for="input" class="form-label">Nome do cliente</label>
    <input type="text" class="form-control bg-dark text-light" id="input" disabled/>
  </div>
  <div class="col-md-6">
    <label for="input" class="form-label">ID atendimento</label>
    <input type="text" disabled class="form-control bg-dark text-light" id="input" disabled/>
  </div>
  <div class="col-md-6">
    <label for="input" class="form-label">Nome do tipo de atendimento</label>
      <input type="text" value={localStorage.getItem("Atendimento")}disabled class="form-control bg-dark text-light" id="input" disabled/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress " class="form-label ">Nome do técnico</label>
    <input type="text" class="form-control bg-dark text-light "  disabled    id="inputAddress" disabled/>
  </div>
  
  <div class="col-md-6  ">
  <label for="example-datetime-local-input" class="col-12 col-form-label">Data da execução</label>
  <div class="col-md-6">
    <input class="form-control bg-dark text-light"  type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input"disabled/>
  </div>
</div>
 
  <div class="col-md-12">
    <label for="exampleTextarea">Observação</label>
    <textarea class="form-control" id="exampleTextarea" rows="3" disabled></textarea>
  </div>
 
    
</form>
</section>


</section>





































</section>

    );}
}

export default RelatorioDeCadastrados;
