import { InterfaceAction, InterfaceShowAction } from './interfaces/Action';
import Actions from './enums/Actions';
import InterfaceShow from './interfaces/Show';

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
