// @flow
import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerm: ''
  };

  // this is transform class props and solves us having to do
  // this.handleOnSearchChange = this.handleOnSearchChange.bind(this); in the constructor!
  // https://github.com/tc39/proposal-class-fields
  handleOnSearchChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    // setState "hey you need to rerender"
    // dont use this.state = ...
    this.setState({
      searchTerm: event.target.value
    });
  };
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
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.descriprion}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
