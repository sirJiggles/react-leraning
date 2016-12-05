import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Teachers from './components/Teachers';
import Courses from './components/Courses';

const routes = (
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="about" component={About}/>
      <Route path="teachers" component={Teachers}/>
      <Route path="courses" component={Courses}/>
    </Route>
  </Router>
);

export default routes;
