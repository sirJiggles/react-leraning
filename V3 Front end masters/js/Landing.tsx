import * as React from 'react';
import { Component, ComponentType } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Reducer } from 'redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './action-creators';
import { History } from 'history';

// this is how you would do it using a generator
// @connect(mapStateToProps)
// class Landing extends Component {
//   public render() {
//     return (
//       <div className="landing">
//         <h1>svideo</h1>
//         <input type="text" placeholder="Search" />
//         <Link to="/search">Browse all</Link>
//       </div>
//     )
//   }
// }

class Landing extends Component {
  props: { searchTerm: string, handleSearchTermChange: (event: any) => void, history: History };
  goToSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
            onChange={this.props.handleSearchTermChange}
          />
          <Link to="/search">Browse all</Link>
        </form>
      </div>
    );
  }
}

// just FYI the ({}) means return the object, not open a func body in ES6
const mapStateToProps: any = (state: { searchTerm: string }) => ({
  searchTerm: state.searchTerm
});
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event: any) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
