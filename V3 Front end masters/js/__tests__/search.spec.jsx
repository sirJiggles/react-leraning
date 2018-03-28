import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

test('Search renders correctly', () => {
  // shallow will stub out child components
  // so if tests fail in child items, they wont fail up here
  const component = shallow(<Search />);

  // should match the snapshot that is generated!
  expect(component).toMatchSnapshot();
});
