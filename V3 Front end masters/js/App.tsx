import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Provider } from 'react-redux';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from './data';
import store from './store';
import InterfaceShow from './interfaces/Show';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <Provider store={store}>
    <div className="app">
      {/* Only render ones that match */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={(props: RouteComponentProps<any>) => (
            <Search shows={preload.shows} {...props} />
          )}
        />
        <Route
          path="/details/:id"
          component={(props: RouteComponentProps<{ id: string }>) => (
            <Details
              show={preload.shows.find(show => props.match.params.id === show.imdbID)}
              rating=""
            />
          )}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

export default App;
