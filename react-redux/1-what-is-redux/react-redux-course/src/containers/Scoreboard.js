import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/players';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';

class Scoreboard extends Component {
  static PropTypes = {
    players: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, players } = this.props;

    // action creators
    // bind action creators, take dispatch as second arg. makes sure when invoked
    // is also dispatched
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    // iterate over players and create a player component for each player
    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ));

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state
});

// first set is function we want to use to transform state to props
// second is container we want to connect to redux
// subscribe storeboard to any state changes and when it happen the function
// 'mapStateToProps' is called. this will then map players
// the double () is because we are calling a the evaluated function returned from connect
export default connect(mapStateToProps)(Scoreboard);
