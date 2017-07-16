import * as PlayerActionTypes from '../actionTypes/player';

// default value
const initialState = [
  {
    name: 'Jim Hoskins',
    score: 31,
  },
  {
    name: 'Andrew Chalkley',
    score: 20,
  },
  {
    name: 'Alena Holligan',
    score: 50,
  },
];

export default function Player(state = initialState, action) {
  switch (action.type) {
  case PlayerActionTypes.ADD_PLAYER:
    return [
      // concatinate and do not MUTATE the original state
      // and add a new player onto the state
      ...state,
      {
        name: action.name,
        score: 0
      }
    ];
  case PlayerActionTypes.REMOVE_PLAYER:
    return [
      ...state.splice(0, action.index),
      ...state.splice(action.index + 1),
    ];
  case PlayerActionTypes.UPDATE_PLAYER_SCORE:
    return state.map((player, index) => {
      // if we found the player to modify,
      // return a new object that is the modification of the existing
      // player, with the score modifed
      if (index === player.index) {
        return {
          ...player,
          score: player.score + action.name
        };
      }
      return player;
    });
  default:
    return state;
  }
}