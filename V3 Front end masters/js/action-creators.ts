import InterfaceAction from './interfaces/Action';
import Actions from './enums/Actions';

export function setSearchTerm(searchTerm: string): InterfaceAction {
  return {
    type: Actions.SET_SEARCH_TERM,
    payload: searchTerm
  };
}
