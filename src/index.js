import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {Router, Route, Switch} from 'react-router-dom'
import history from './router/history'

import Home from "./components/Home"
import Tabla from './components/Tabla'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import ItemList from './views/ItemList'

ReactDOM.render(
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route table path="/table" component={Tabla} />
        <Route path="/results" component={ItemList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
