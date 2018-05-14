import { createStore, Store, compose } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  compose(
    typeof window === 'object' && typeof (window as any).devToolsExtension !== 'undefined'
      ? (window as any).devToolsExtension()
      : // identity function ...
        (f: any) => f
  )
);

export default store;
