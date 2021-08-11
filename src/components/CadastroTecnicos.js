import React from 'react';
import '../assets/css/stilo.css'
import BotaoAdicionarTecnico from './BotaoTecnico';
 
class CadastroTecnicos extends React.Component {
  render() {

    
    return(  
  
  
<section className="row justify-content-center flex-wrap   " id="Tabela">
 

 <section classNameName="d-flex"  id="Cadastrar">
 
 <form className="row g-1  justify-content-center align-items-center">
   
   <div className="col-md-12" >
     <label for="input" className="form-label" autofocus>Novo Atendimento</label >
     <input type="text"  className="form-control inputf  " id="input" />
   </div> 
   <div class="col-md-3">
   <BotaoAdicionarTecnico/>
   </div>
   <div className="col-1 ">
      <button type="submit" className="btn btn-danger btn-lg">Sair</button>
   </div>
 </form>
 </section>
 
 
 </section>
 
 
 
 
 
 
 
 
 
 
 
 



































 

    );}
}

export default CadastroTecnicos;
