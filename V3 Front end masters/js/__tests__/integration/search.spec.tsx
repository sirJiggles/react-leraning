import * as React from 'react';
import { mount } from 'enzyme';
import { Unwrapped as UnwrappedSearch } from '../../Search';
import { Unwrapped as UnwrappedHeader } from '../../Header';
import ShowCard from '../../ShowCard';
import Header from '../../Header';
import data from '../../data';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';

test('When type in input form in header should show correct results', () => {
  const searchWord = 'black';
  const component = mount(
    <Provider store={store}>
      <MemoryRouter>
        <UnwrappedSearch shows={data.shows} searchTerm="" />
      </MemoryRouter>
    </Provider>
  );
  expect(component.find(UnwrappedHeader).length).toEqual(1);
  component
    .find(UnwrappedHeader)
    .find('input')
    .simulate('change', { target: { value: searchWord } });
  expect(component.find(ShowCard).length).toEqual(2);
  component.unmount();
});
