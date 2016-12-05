// Libs
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS
import './css/style.css';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Teachers from './components/Teachers';
import Courses from './components/Courses';

// Render
render((
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="teachers" component={Teachers}/>
        <Route path="courses" component={Courses}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
