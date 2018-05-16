import { setSearchTerm, addAPIData } from '../../action-creators';

test('setSearchTerm', () => {
  // can use snapshot as this is just a JSON object returned from the func
  expect(setSearchTerm('new york')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(
    addAPIData({
      title: 'Atlanta',
      year: '2008–2013',
      description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; \'Earnest "Earn" Marks,\' an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
      poster: 'a.jpg',
      imdbID: 'tt4288182',
      trailer: 'MpEdJ-mmTlY',
      rating: '8.6'
    })
  ).toMatchSnapshot();
});
