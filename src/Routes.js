import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import TelaLogin from './components/TelaLogin'
import TelaTecnico from './components/TelaTecnico'
import TelaGestor from './components/TelaGestor'
import TelaRelatorio from './components/TelaRelatorio'
import Teste from './Teste'
import UserProvider from './Contexts/UserContext';
const Routes = () => {
 
      
      return(  
          <UserProvider>
      <section>
           <BrowserRouter>
            <Switch>
                <Route exact path="/" exact component={TelaLogin} />
                <Route exact path="/telatecnico" component={TelaTecnico} />
                <Route exact path="/telagestor" component={TelaGestor}/>
                <Route exact path="/telarelatorio" component={TelaRelatorio} />
                <Route exact path="/teste" component={Teste} />

            </Switch>        
        </BrowserRouter>
  
  </section>
  </UserProvider>
      );
  }
  
  export default Routes;
  
   