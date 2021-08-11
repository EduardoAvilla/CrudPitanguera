import React from 'react';
import CadastroTecnicos from './CadastroTecnicos' 

 class BotaoAdicionarTec extends React.Component {
   constructor(props) {
      super(props);
      this.state = { isToggleOn: false, camp:30 };
  
      // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
      this.handleClick = this.handleClick.bind(this);
   
    }
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        
      }
      
      
      ));
  
     }
  
   render() {

  
    return(   
 
 
 <div >
<button  onClick={this.handleClick}  type="button" className="btn-lg  btn-dark">Adicionar

</button>
{this.state.isToggleOn ?  <CadastroTecnicos/> :  ''}

 </div>
     
    );}
}
 export default BotaoAdicionarTec;

 