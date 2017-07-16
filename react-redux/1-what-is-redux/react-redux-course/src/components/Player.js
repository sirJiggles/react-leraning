import React, { PropTypes } from 'react';
import Counter from './Counter';

const Player = (props) => {
  return (
    <div className="player" onClick={ () => props.selectPlayer(props.index) }>
      <div className="player-name">
        <a className="remove-player" onClick={ () => props.removePlayer(props.index) }>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter
          updatePlayerScore={props.updatePlayerScore}
          score={props.score}
          index={props.index}
        />
      </div>
    </div>
  );
};

Player.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
  selectPlayer: PropTypes.func.isRequired
};

export default Player;
