import thunk from 'redux-thunk';
import { createStore, Store, compose, applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof (window as any).devToolsExtension !== 'undefined'
      ? (window as any).devToolsExtension()
      : // identity function ...
        (f: any) => f
  )
);

export default store;
