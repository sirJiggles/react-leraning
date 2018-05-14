import InterfaceAction from './interfaces/Action';
import Actions from './enums/Actions';
import { combineReducers, Action } from 'redux';

// single resposibility reducers now, just looks at search term
const searchTerm = (state = '', action: any) =>
  action.type === Actions.SET_SEARCH_TERM ? action.payload : state;

// combine reducers is great as we need no switch case and object merging anymore!
// and we can silo off little reducers
// can still use a root reducer if you like later on
const rootReducer = combineReducers({ searchTerm });

export default rootReducer;
