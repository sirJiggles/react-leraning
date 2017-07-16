import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './src/reducers/player.js';
import Scoreboard from './src/containers/Scoreboard';

// lets create the store!
// register the reducer with redux
const store = createStore(
  PlayerReducer,
  // add the dev tools to the middleware pipeline!
  window.devToolsExtension && window.devToolsExtension()
);


// wrap the app in provider, so the score board has access to method
// to listed to events
render(
  <Provider store={store}>
    <Scoreboard/>
  </Provider>,
  document.getElementById('root')
);
