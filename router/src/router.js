import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from './components/App';

import Home from './components/Home';
import About from './components/About';
import Teachers from './components/Teachers';

import Courses from './components/Courses';
import CourseContainer from './components/courses/CourseContainer';
import CourseList from './data/courses';

import Featured from './components/Featured';

import NotFound from './components/NotFound';

const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="about" component={About}/>
      <Route path="teachers" component={Teachers}/>
      <Route path="courses" component={Courses}>
        <IndexRedirect to="html" />
        <Route path="html" component={CourseContainer} data={ CourseList.HTML } />
        <Route path="css" component={CourseContainer} data={ CourseList.CSS } />
        <Route path="javascript" component={CourseContainer} data={ CourseList.JavaScript } />
      </Route>
      <Route path="featured/:topic/:name" component={Featured} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
