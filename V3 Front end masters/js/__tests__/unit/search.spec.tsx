import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Unwrapped as UnwrappedSearch } from '../../Search';
import ShowCard from '../../ShowCard';
import { Unwrapped as UnwrappedHeader } from '../../Header';
import data from '../../data';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';

test('Search renders correctly', () => {
  // shallow will stub out child components
  // so if tests fail in child items, they wont fail up here
  const component = shallow(<UnwrappedSearch shows={data.shows} searchTerm="" />);

  // should match the snapshot that is generated!
  expect(component).toMatchSnapshot();
});

test('Search should remember correct amount of shows', () => {
  const component = shallow(<UnwrappedSearch shows={data.shows} searchTerm="" />);
  expect(component.find(ShowCard).length).toEqual(data.shows.length);
});

xtest('get the right amount of cards for search', () => {
  const component = mount(<UnwrappedSearch shows={data.shows} searchTerm="black" />);
  expect(component.find(ShowCard).length).toEqual(2);
  component.unmount();
});

test('Search should render a header', () => {
  const searchWord = 'black';
  const component = mount(
    <Provider store={store}>
      <MemoryRouter>
        <UnwrappedSearch shows={data.shows} searchTerm="" />
      </MemoryRouter>
    </Provider>
  );
  expect(component.find(UnwrappedHeader).length).toEqual(1);
});
