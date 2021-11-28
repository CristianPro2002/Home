import React from 'react';
import Index from './componentes/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Newhome from './componentes/newhome/Newhome';


const App = () => {
  return (
    
      <Router>
    <Switch>
          <Route path="/home">
          <Index />
          </Route>
          <Route path="/Newhome">
          <Newhome />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;