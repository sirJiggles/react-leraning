import { Action } from 'redux';
import InterfaceShow from './Show';
export interface InterfaceAction extends Action {
    type: any;
    payload: string;
}
export interface InterfaceShowAction extends Action {
    type: any;
    payload: InterfaceShow;
}
