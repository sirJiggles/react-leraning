import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Reducer } from 'redux';
import { Link } from 'react-router-dom';

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
const Landing = () => (
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">Browse all</Link>
  </div>
);

// just FYI the ({}) means return the object, not open a func body in ES6
const mapStateToProps: any = (state: any) => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Landing);
