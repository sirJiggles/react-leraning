import { InterfaceAction, InterfaceShowAction } from './interfaces/Action';
import Actions from './enums/Actions';
import InterfaceShow from './interfaces/Show';
import axios from 'axios';

export function setSearchTerm(searchTerm: string): InterfaceAction {
  return {
    type: Actions.SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function addAPIData(apiData: InterfaceShow): InterfaceShowAction {
  return {
    type: Actions.ADD_API_DATA,
    payload: apiData
  };
}

// this is the one that returns a thunk aka function, so this is a defered action
// I will wait for dispatch
export function getAPIDetails(imdbID: string) {
  // this function is the "thunk"
  // this is what will be invoked by the middleware we added using redux thunk
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        // now resolve and give the action with the data from the API req
        dispatch(addAPIData(response.data));
      })
      .catch(err => {
        console.error('axios erorr', err);
      });
  };
}
