import React, { PropTypes } from 'react';

const PlayerDetail = (props) => {
  let playerObj = undefined;
  props.players.forEach((player, index) => {
    if (index === props.selectedPlayerIndex) {
      playerObj = player;
    }
  });
  if (props.selectedPlayerIndex !== -1 && playerObj) {
    return (
      <div>
        <h3>{ playerObj.name }</h3>
        <ul>
          <li>
            <span>Score: </span>
            { playerObj.score }
          </li>
          <li>
            <span>Created: </span>
            { playerObj.created }
          </li>
          { playerObj.updated !== '' &&
            <li>
              <span>Updated: </span>
              { playerObj.updated }
            </li>
          }
        </ul>
      </div>
    );
  }
  return (<p>Click on a player to see more details</p>);
};

PlayerDetail.PropTypes = {
  selectedPlayerIndex: PropTypes.number.isRequired,
  players: PropTypes.array.isRequired
};

export default PlayerDetail;
