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

/*

describe('exampleSlice', () => {
    describe('reducers', () => {
/!*        const initialState = { id: '', list: [], fetching: false }

        it('sets fetching true when fetchList is pending', () => {
            const action = { type: fetchMovies.pending.type };
            const state = reducer(initialState, action);
            expect(state).toEqual({ id: '', list: [], fetching: true });
        });*!/

        it('sets the id and list when fetchList is fulfilled', () => {
            const action = { type: fetchMovies.fulfilled.type, payload: { id: 1, list: [2, 3]} };
            const state = reducer(initialState, action);
            expect(state).toEqual({ id: 1, list: [2, 3], fetching: false });
        });

        it('sets fetching false when fetchList is rejected', () => {
            const action = { type: fetchMovies.rejected.type, payload: { error: 'some error' } };
            const state = reducer(initialState, action);
            expect(state).toEqual({ id: '', list: [], fetching: false });
        });
    });

});*/
