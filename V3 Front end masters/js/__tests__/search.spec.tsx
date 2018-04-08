import * as React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import data from '../data';

test('Search renders correctly', () => {
  // shallow will stub out child components
  // so if tests fail in child items, they wont fail up here
  const component = shallow(<Search shows={data.shows} />);

  // should match the snapshot that is generated!
  expect(component).toMatchSnapshot();
});

test('Search should remember correct amount of shows', () => {
  const component = shallow(<Search shows={data.shows} />);
  expect(component.find(ShowCard).length).toEqual(data.shows.length);
});

test('Search should render correct based on search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search shows={data.shows} />);
  component.find('input').simulate('change', { target: { value: searchWord } });
  expect(component.find(ShowCard).length).toEqual(2);
});
