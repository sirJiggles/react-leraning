import './styles.scss';
import _ from 'lodash';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.map(['Hello','New'], function(item){
    return item + ' ';
  });

  console.log('something');

  return element;
}

document.body.appendChild(component());
