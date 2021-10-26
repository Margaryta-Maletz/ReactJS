import { createSelector, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState.json';
import { CardPosterProp } from "../components/EditButton";

type StateData = {
   movie: CardPosterProp,
   id: number,
}

export const selector = createSelector(
    state => state,
    ({initialState, isVisibledDetailsMovie}) => ({
        isVisibledDetailsMovie,
        movieList: movieList.filter(({id}) => (
            !isVisibledDetailsMovie || (isVisibledDetailsMovie && id)
        )),
    }),
);
// element.id, action.payload
const slice = createSlice({
    name: 'netflix',
    initialState: {
        movieList: initialState.data,
        isVisibleDetailsMovie: false,
    },
    reducers: {
        setVisibleDetailsMovie: (state, action) => {
            state.isVisibleDetailsMovie = action.payload;
        },
        getMoviesStart: (state, action) => {},
        getMoviesSuccess: (state, action) => {},
        getMoviesError: (state, action) => {},
    },
    // extraReducers: {},
})

export default slice.reducer;

export const {
    setVisibleDetailsMovie,
    getMoviesStart,
    getMoviesSuccess,
    getMoviesError,
} = slice.actions;
