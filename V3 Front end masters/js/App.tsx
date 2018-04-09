import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Provider } from 'react-redux';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from './data';
import store from './store';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
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
              <Details {...preload.shows.find(show => props.match.params.id === show.imdbID)} />
            )}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
