import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteComponentProps, RouteProps } from 'react-router';
import { Provider } from 'react-redux';
import preload from './data';
import store from './store';
import InterfaceShow from './interfaces/Show';
import AsyncRoute from './AsyncRoute';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <Provider store={store}>
    <div className="app">
      {/* Only render ones that match */}
      <Switch>
        <Route
          exact
          path="/"
          component={(props: RouteComponentProps<any>) => (
            <AsyncRoute props={props} loadingPromise={import('./Landing')} />
          )}
        />
        <Route
          path="/search"
          component={(props: RouteComponentProps<any>) => (
            <AsyncRoute
              props={Object.assign({
                shows: preload.shows,
                props
              })}
              loadingPromise={import('./Search')}
            />
          )}
        />
        <Route
          path="/details/:id"
          component={(props: RouteComponentProps<{ id: string }>) => (
            <AsyncRoute
              props={Object.assign({
                show: preload.shows.find(show => props.match.params.id === show.imdbID),
                rating: ''
              })}
              loadingPromise={import('./Details')}
            />
          )}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

export default App;
