import { initialState } from "../store/initialState";
import { store } from "../store/store";

const movies = store.getState().movies;

describe('movies reducer', () => {
    it('should return the initial state', () => {
        expect(movies).toEqual(initialState.movies);
    });

    it('should return the initial state', () => {
        expect(movies).toEqual(initialState.movies);
    });
});
