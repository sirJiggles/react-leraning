import InterfaceAction from './interfaces/Action';
import Action from './enums/Action';
import { bindActionCreators } from 'redux';

const DEFAULT_STATE = {
  searchTerm: ''
};

// the reducer for set search term
const setSearchTerm = (state: {}, action: InterfaceAction) => {
  // merge the state into a new obj using spread
  return { ...state, searchTerm: action.payload };
};

// top level of every store is one reducer, no side effects.
// call it 1000 times will always return same thing
// so given same in get same out, no modify state
// ROOT REDUCER DELEGATES TO SUB REDUCER, lol its just a function ...
const rootReducer = (state = DEFAULT_STATE, action: InterfaceAction) => {
  switch (action.type) {
    case Action.SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
