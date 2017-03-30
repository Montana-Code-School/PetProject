import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import React from 'react';
import Home from './components/Home';
import DisplayPets from './components/DisplayPets';
import App from './components/App';
import Login from './components/Login';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/DisplayPets" component={DisplayPets}/>
    </Route>
  </Router>
),

document.getElementById('app'));
