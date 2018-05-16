import { InterfaceAction, InterfaceShowAction } from './interfaces/Action';
import InterfaceShow from './interfaces/Show';
export declare function setSearchTerm(searchTerm: string): InterfaceAction;
export declare function addAPIData(apiData: InterfaceShow): InterfaceShowAction;
export declare function getAPIDetails(imdbID: string): (dispatch: Function) => void;
