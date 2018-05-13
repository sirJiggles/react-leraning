import Actions from '../enums/Actions';
import { Action } from 'redux';

export default interface InterfaceAction {
  type: Actions,
  payload: any
}

