import * as PlayerActionTypes from '../actionTypes/player';

// default value
const initialState = {
  players: [
    {
      name: 'Jim Hoskins',
      score: 31,
      created: '11/8/2016',
      updated: '11/9/2016'
    },
    {
      name: 'Andrew Chalkley',
      score: 20,
      created: '11/9/2016',
      updated: '11/10/2016'
    },
    {
      name: 'Alena Holligan',
      score: 50,
      created: '11/11/2016',
      updated: '11/12/2016'
    }
  ],
  selectedPlayerIndex: -1
};

export default function Player(state = initialState, action) {
  var today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  const now = `${mm}/${dd}/${yyyy}`;

  switch (action.type) {
  case PlayerActionTypes.ADD_PLAYER: {


    return {
      players: [
        // concatinate and do not MUTATE the original state
        // and add a new player onto the state
        ...state.players,
        {
          name: action.name,
          score: 0,
          created: now,
          updated: ''
        }
      ],
      selectedPlayerIndex: state.selectedPlayerIndex
    };
  }
  case PlayerActionTypes.REMOVE_PLAYER:
    return {
      players: [
        ...state.players.slice(0, action.index),
        ...state.players.slice(action.index + 1),
      ],
      selectedPlayerIndex: state.selectedPlayerIndex
    };
  case PlayerActionTypes.UPDATE_PLAYER_SCORE:
    return {
      players: state.players.map((player, index) => {
        // if we found the player to modify,
        // return a new object that is the modification of the existing
        // player, with the score modifed
        if (index === action.index) {
          return {
            ...player,
            updated: now,
            score: player.score + action.score
          };
        }
        return player;
      }),
      selectedPlayerIndex: state.selectedPlayerIndex
    };
  case PlayerActionTypes.SELECT_PLAYER:
    return {
      players: state.players,
      selectedPlayerIndex: action.index
    };
  default:
    return state;
  }
}
