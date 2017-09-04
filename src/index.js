import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import './styles/simple-grid.css'
import './style/index.css'

import Home from './pages/home.js';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="*" component={Home}/>
    </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
