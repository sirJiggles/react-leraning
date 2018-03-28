import React from 'react';
import { render } from 'react-dom';

const myTitle = function myTitle(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

// composit component "comoonent of components"
const myFirstComponent = function myFirstComponent() {
  return (
    <div id="my-sample-component">
      <myTitle color="YellowGreen" title="Game of thrones" />
      <myTitle color="GreenYellow" title="Stranger things" />
      <myTitle color="peru" title="Rick and morty" />
    </div>
  );
};

render(<myFirstComponent />, document.getElementById('app'));
