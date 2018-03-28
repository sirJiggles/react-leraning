import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'this is a sample string'
    };

    // this looks crazy, but this is to stop the bind being called on every render
    // the bind way of doing it in the component is old and should not be done
    // will cause a lint error if using airBnb rules ;)
    this.handleOnSearchChange = this.handleOnSearchChange.bind(this);
  }
  // called when we have a change on the input
  handleOnSearchChange(event) {
    // setState "hey you need to rerender"
    // dont use this.state = ...
    this.setState({
      searchTerm: event.target.value
    });
  }
  render() {
    return (
      <div className="search">
        {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
        <header>
          <h1>
            svideo
          </h1>
          <input
            onChange={this.handleOnSearchChange}
            type="text"
            placeholder="Search"
            value={this.state.searchTerm}
          />
        </header>
        <div>
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
