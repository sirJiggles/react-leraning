import { Component, SyntheticEvent } from 'react';
import * as React from 'react';
import ShowCard from './ShowCard';
import InterfaceShow from './interfaces/Show';

class Search extends Component {
  public state = {
    searchTerm: ''
  };

  public props: {
    shows: InterfaceShow[]
  }

  public render() {
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
          {this.props.shows
            .filter(
              (show: InterfaceShow) =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map((show: InterfaceShow) => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }

  // this is transform class props and solves us having to do
  // this.handleOnSearchChange = this.handleOnSearchChange.bind(this); in the constructor!
  // https://github.com/tc39/proposal-class-fields
  private  handleOnSearchChange = (
    event: SyntheticEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    // setState "hey you need to rerender"
    // dont use this.state = ...
    this.setState({
      searchTerm: event.target.value
    });

    //
  };
}

export default Search;
