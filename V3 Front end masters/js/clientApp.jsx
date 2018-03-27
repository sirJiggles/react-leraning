import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const myTitle = function myTitle(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const myFirstComponent = function myFirstComponent() {
  return ce(
    'div',
    null,
    ce(myTitle, { color: 'YellowGreen', title: 'Game of thrones' }),
    ce(myTitle, { color: 'GreenYellow', title: 'Stranger things' }),
    ce(myTitle, { color: 'peru', title: 'Rick and morty' })
  );
};

render(ce(myFirstComponent), document.getElementById('app'));
