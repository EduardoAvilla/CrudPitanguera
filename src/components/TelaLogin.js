import React from 'react';
import '../assets/css/stilo.css'
 import ImgPc from '../assets/img/computador.png'
import ImgUser from '../assets/img/usuario.png'

class TelaLogin extends React.Component {
  render() {

    //const[usuario,setUsuario]=this.setState(); 
   // const[senha,setSenha]=this.setState(); 
 
    return( 
      
      <main id="tela" className = "d-flex p-2 bd-highlight"> 
       
       <nav id="ladoa"  className = "d-flex  flex-column justify-content-center">
       <nav className="texto">
          <p>

          A empresa PITANGUEIRA MANUTEÇÃO DE HARDWARE LTDA trabalha desenvolvendo sistemas
para registrar e quantificar os atendimentos realizados por seus técnicos de TI a seus
clientes.

          </p>

          </nav>
  
          
          
          <nav className="subTexto">
            <img  id="imgPC"  src= {ImgPc}  alt="" width="70%"/>
            
          <h1 id="txt_empresa">PITANGUEIRA</h1>
          <p>MANUTENÇÃO DE HARDWARE</p>
         
          </nav>         
          </nav >

          




       <section id="ladob" className = "d-flex flex-row flex-column align-items-center justify-content-center"> 
     <div>
       <img id="imgUSER"  src={ImgUser} alt="" width="30%"/>
       </div>  

    



        
       <form id="formulario"class="form-row align-items-center d-flex flex-row flex-column  justify-content-center">
      

      
      <br/>
     

      
       
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">@</span>
  </div>
  <input id="login" /*onChange={e =>setUsuario(e.target.value)} */ type="text" class="form-control" placeholder="Usuário" aria-label="Usuário" aria-describedby="basic-addon1"/>
</div>


        
          
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">**</span>
  </div>
  <input id= "senha" /* onChange={e =>setSenha(e.target.value)}*/  type="password" class="form-control" placeholder="Senha" aria-label="Usuário" aria-describedby="basic-addon1"/>
</div>


        <button class="btn btn-lg justify-content" id="btnEntrar" type="submit" >Entrar</button>
        </form>
</section>
 


       </main>

      
    
 )}
}

export default TelaLogin;
 