import { createStore } from 'redux';
import reducers from './reducers';
import { Store } from 'redux';

const store = createStore(reducers);

export default store;
