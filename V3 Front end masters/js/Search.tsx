import * as React from 'react';
import ShowCard from './ShowCard';
import InterfaceShow from './interfaces/Show';
import Header from './Header';
import { connect } from 'react-redux';

const Search = (props: { searchTerm: string, shows: Array<InterfaceShow> }) => (
  <div className="search">
    {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
    <Header showSearch={true} />
    <div>
      {props.shows
        .filter(
          (show: InterfaceShow) =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map((show: InterfaceShow) => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = (state: { searchTerm: string }) => ({
  searchTerm: state.searchTerm
});

// this is used only for tests
export const Unwrapped = Search;

export default connect(mapStateToProps)(Search);
