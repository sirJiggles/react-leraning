import reducers from '../../reducers';

// pasted from redux dev tools!
test('setSearchTerm', () => {
  const state = reducers(
    { searchTerm: '', apiData: {} },
    { type: 'setSearchTerm', payload: 'black' }
  );
  expect(state).toEqual({ searchTerm: 'black', apiData: {} });
});

test('addAPIData', () => {
  const state = reducers(
    { searchTerm: '', apiData: {} },
    {
      type: 'addAPIData',
      payload: {
        rating: '7.8',
        title: 'Westworld',
        year: '2016–',
        description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
        poster: 'ww.jpg',
        imdbID: 'tt0475784',
        trailer: 'eX3u0IlBBO4'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt0475784: {
        rating: '7.8',
        title: 'Westworld',
        year: '2016–',
        description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
        poster: 'ww.jpg',
        imdbID: 'tt0475784',
        trailer: 'eX3u0IlBBO4'
      }
    }
  });
});
