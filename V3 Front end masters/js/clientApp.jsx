import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  // this is a browser concernt that we cannot do on things like
  // server side rendering
  render(<App />, document.getElementById('app'));
};

renderApp();

// If hot module replacement is enabled, when app changes, call this function
// All the others are fine but the top level one needs to be told how to re-render
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
