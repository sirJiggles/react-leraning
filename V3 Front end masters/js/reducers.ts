import { InterfaceAction, InterfaceShowAction } from './interfaces/Action';
import Actions from './enums/Actions';
import { combineReducers, Action, Reducer } from 'redux';

// single resposibility reducers now, just looks at search term
const searchTerm = (state = '', action: any) =>
  action.type === Actions.SET_SEARCH_TERM ? action.payload : state;

const apiData = (state = {}, action: any) => {
  if (action.type === Actions.ADD_API_DATA) {
    // make the data on the store, saved by imdb key
    // then we can check later if already in local state.
    // if it is there is no need to make another API request later on
    return Object.assign({}, state, {
      [action.payload.imdbID]: action.payload
    });
  }
  return state;
};

// combine reducers is great as we need no switch case and object merging anymore!
// and we can silo off little reducers
// can still use a root reducer if you like later on
const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
