import { SyntheticEvent } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = (
  props: {
    showSearch?: boolean,
    handleOnSearchChange?: (
      event: SyntheticEvent<HTMLInputElement> & { target: HTMLInputElement }
    ) => void,
    searchTerm?: string
  } = {
    showSearch: false
  }
) => {
  let utilSpace;
  const { handleOnSearchChange, searchTerm } = props;
  if (props.showSearch) {
    utilSpace = (
      <input onChange={handleOnSearchChange} type="text" placeholder="Search" value={searchTerm} />
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

export default Header;
