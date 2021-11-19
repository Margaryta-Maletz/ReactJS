import { initialState } from '../store/initialState';
import { store } from '../store/store';
import { setActiveGenre } from '../store/slice';

const state = store.getState();

describe('movies reducer', () => {
    it('should return the initial state', () => {
        expect(state.movies).toEqual(initialState.movies);
        expect(state.searchString).toEqual(initialState.searchString);
        expect(state.activeGenre).toEqual(initialState.activeGenre);
    });

    it('should return the dispatch state', () => {
        store.dispatch(setActiveGenre('Action'));
        expect(store.getState().activeGenre).toEqual('Action');
    });
});
