import * as React from 'react';
import { mount, render } from 'enzyme';
import { Unwrapped as UnwrappedSearch } from '../../Search';
import { Unwrapped as UnwrappedHeader } from '../../Header';
import ShowCard from '../../ShowCard';
import Header from '../../Header';
import data from '../../data';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';
import { setSearchTerm } from '../../action-creators';

test('when fire search action, with term should show correct results', () => {
  const searchWord = 'black';
  // dispatch the action manually!
  store.dispatch(setSearchTerm(searchWord));

  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <UnwrappedSearch shows={data.shows} searchTerm={searchWord} />
      </MemoryRouter>
    </Provider>
  );
  // expect(component.find(UnwrappedHeader).length).toEqual(1);

  const count = data.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  // component
  //   .find(UnwrappedHeader)
  //   .find('input')
  //   .simulate('change', { target: { value: searchWord } });
  expect(component.find('.show-card').length).toEqual(count);
});
