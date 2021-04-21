import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import AppLayout from './AppLayout';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ProtectedRoute} from './protectedroute';

function App() {
  return (
    <Router>
    <div className="App" >
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="/About" component={About} />
        <Route path="/Shop" component={Shop} />
        
        </Switch>
    </div>
    </Router>
  );
}


export default App;
