import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const mapStateToProps = (state: { searchTerm: string }) => ({
  searchTerm: state.searchTerm
});

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

export default connect(mapStateToProps)(Landing);

// export default Landing
