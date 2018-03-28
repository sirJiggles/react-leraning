import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';

test('Search renders correctly', () => {
  const component = renderer.create(<Search />);
  const tree = component.toJSON();

  // should match the snapshot that is generated!
  expect(tree).toMatchSnapshot();
});
