import React, { PropTypes } from 'react';
import Counter from './Counter';

const Player = (props) => {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={ () => props.removePlayer(props.player.index) }>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter
          updatePlayerScore={ props.updatePlayerScore }
          score={props.score}
          index={props.index}
        />
      </div>
    </div>
  );
}

Player.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
};

export default Player;
