import { SyntheticEvent } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './action-creators';

const Header = (props: {
  showSearch?: boolean,
  searchTerm: string,
  handleSearchTermChange: (event: any) => void
}) => {
  let utilSpace;
  const { handleSearchTermChange, searchTerm } = props;
  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={handleSearchTermChange}
        type="text"
        placeholder="Search"
        value={searchTerm}
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">
          svideo
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};
const mapStateToProps = (state: { searchTerm: string }) => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event: any) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
