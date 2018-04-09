import Actions from './enums/Action';
import InterfaceAction from './interfaces/Action';

export function setSearchTerm(searchTerm: string): InterfaceAction {
  return {
    type: Actions.SET_SEARCH_TERM,
    payload: searchTerm
  };
}
