import * as React from 'react';
import { mount } from 'enzyme';
import Search from '../../Search';
import ShowCard from '../../ShowCard';
import Header from '../../Header';
import data from '../../data';

test('When type in input form in header should show correct results', () => {
  const searchWord = 'black';
  const component = mount(<Search shows={data.shows} />);
  expect(component.find(Header).length).toEqual(1);
  component.find(Header).find('input').simulate('change', { target: { value: searchWord } });
  expect(component.find(ShowCard).length).toEqual(2);
  component.unmount();
});
