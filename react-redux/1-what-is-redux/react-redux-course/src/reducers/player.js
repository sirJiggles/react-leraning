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
  switch (action) {
    case PlayerActionTypes.ADD_PLAYER:

      break;
    case PlayerActionTypes.REMOVE_PLAYER:
      break;
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      break;
    default:
      break;
  }
};