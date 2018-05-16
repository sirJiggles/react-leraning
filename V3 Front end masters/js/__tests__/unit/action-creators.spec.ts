// mocking lib from axios
import * as moxios from 'moxios';
import { setSearchTerm, addAPIData, getAPIDetails } from '../../action-creators';

const atlanta = {
  title: 'Atlanta',
  year: '2008–2013',
  description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; \'Earnest "Earn" Marks,\' an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
  poster: 'a.jpg',
  imdbID: 'tt4288182',
  trailer: 'MpEdJ-mmTlY',
  rating: '8.6'
};

test('setSearchTerm', () => {
  // can use snapshot as this is just a JSON object returned from the func
  expect(setSearchTerm('new york')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addAPIData(atlanta)).toMatchSnapshot();
});

// the done is as we are async we can use jests done func to
// say, ok sir it is indeed done now expect blah blah blah
test('getAPIDetails', done => {
  // jest.fn is a spy function, here we want to expect that
  // dispatch gets called at some point to update redux, so we will spy on it
  const dispatchSpy = jest.fn();

  // anything in here that uses axios (ajax requests) will be mocked
  // with moxios. shamazing sir
  moxios.withMock(() => {
    // we need to call what was given back from getAPIDetails
    // aka the thunk...tion
    getAPIDetails(atlanta.imdbID)(dispatchSpy);
    // wait for the api req
    moxios.wait(() => {
      // get the last one
      const request = moxios.requests.mostRecent();

      // fake what comes back from the API
      request
        .respondWith({
          status: 200,
          response: atlanta
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${atlanta.imdbID}`);
          // make sure it called the reducer action with the right data
          // the test for getAPIData is above for good reason ...
          expect(dispatchSpy).toBeCalledWith(addAPIData(atlanta));
          done();
        });
    });
  });
});
