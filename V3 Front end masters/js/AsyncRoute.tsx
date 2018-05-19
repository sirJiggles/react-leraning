import * as React from 'react';
import { Component } from 'react';
import Spinner from './Spinner';
import { RouteProps } from 'react-router';

// this is a higher order component, will go out
// fetch what you asked for then render
class AsyncRoute extends Component {
  state: {
    loaded: boolean
  };

  props: {
    props: any,
    loadingPromise: Promise<{ default: React.ComponentClass }>
  };

  // this is a class prop not in state as we do not care about changes for render
  component: React.ComponentClass = null;

  // transform class props plugin seems not to be working here
  // @TODO come back and investigate how to fix, seems to be an issue with code splitting and TS
  constructor(props: { props: any, loadingPromise: Promise<{ default: React.ComponentClass }> }) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({
        loaded: true
      });
    });
  }

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    } else {
      return <Spinner />;
    }
  }
}

export default AsyncRoute;
