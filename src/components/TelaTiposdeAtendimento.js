import React from 'react';
import '../assets/css/stilo.css'
import BotaoAdicionarTec from './BotaoAdicionarTec';
import BotaoAdicionarTipo from './BotaoAdicionarTipo';
import BotaoAdicionar from './BotaoAdicionar';

import CadastroTipos from './CadastroTipos';

// import BotaoExcluir from './BotaoExcluir';
 import BotaoDesativar from './BotaoDesativar';
import CadastroTecnicos from './CadastroTecnicos';
 
class TelaTiposdeAtendimento extends React.Component {
 
 

  render() {
    
    return(  
      
    <section className="d-flex justify-content-center flex-wrap" id="fundo ">
  
  
  <section id="Tecnicos" className="d-flex  flex-wrap    ">
 
<form id="formL"> 

 {/*
 
 
   <div class="  d-flex justify-content-center   " id="_Cadastrar">
  <CadastroTipos/>
  </div>   
 */
 }
<section className="row justify-content-center " id="Tabela">
<div id="title_container" className="p-3 mb-2     text-dark      align-items-center  "><h1 id="titulo">Tipos de atendimentos</h1>

</div>  
 
<form className="row g-3 justify-content-center align-items-center">
<form className="row g-3">
  <div className="col-auto">
    <label for="tipo" className="visually-hidden">tipo</label>
    <input type="text"   readonly className="form-control-plaintext" id="tipo" value="Tipo: manutenção"/>
   
  </div>
  <div className="col-auto">
    <label for="inputText" className="visually-hidden"></label>
    <input type="text" disabled className="form-control" id="inputText" placeholder="Manutenção de software"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-danger mb-1">Excluir</button>
  </div>
</form>
 

</form>
<div id="bts">
<div ><BotaoAdicionarTipo/></div>
<div ><BotaoDesativar/></div>
</div>

</section>

 












</form>


   <form   id="formR">

   {/*
 
 
 <div class="  d-flex justify-content-center   " id="_Cadastrar">
<CadastroTecnicos/>
</div>   
*/
}

 

<section className="row justify-content-center " id="Tabela">
<div id="title_container" className="p-3 mb-2     text-dark      align-items-center  "><h1 id="titulo">Técnicos disponíveis</h1>

</div>  
 
<form className="row g-3 justify-content-center align-items-center">
<form className="row g-3">
  <div className="col-auto">
    <label for="tipo" className="visually-hidden">tipo</label>
    <input type="text" readonly className="form-control-plaintext" id="tipo" value="Tecnico"/>
   
  </div>
  <div className="col-auto">
    <label for="inputText" className="visually-hidden"></label>
    <input type="text" disabled className="form-control" id="inputText" placeholder="Gilberto"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-danger mb-1">Excluir</button>
  </div>
</form>
  
  
 
 

</form>
<div id="bts">
<div ><BotaoAdicionarTec/></div>
<div ><BotaoDesativar/></div>
</div>

</section>

 











</form>

 

















 














  </section>

</section>

    );}
}

export default TelaTiposdeAtendimento;
 