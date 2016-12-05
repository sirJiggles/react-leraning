import React from 'react';
import { Link } from 'react-router';

// return link component with active class name attr and value active

const NavLink = (props) => (
  <Link { ...props } activeClassName="active" />
);

export default NavLink;
