import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {IState} from "./types";
import {RootState} from "./store";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (_, thunkApi) => {

        const state = thunkApi.getState() as RootState;

        const url = new URL("http://localhost:4000/movies");

        const params = {
            search: state.searchString || '',
            searchBy: 'title',
            filter: state.activeGenre || '',
            sortBy: state.sortItem,
            sortOrder: state.sortItem === initialState.sortItem ? 'desc' : 'asc',
            limit: '6',
        };

        url.search = new URLSearchParams(params).toString();

        const responseJson = await fetch(url.toString());
        const response = await responseJson.json();

        return response;
    }
);

const slice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getMoviesStart: (state: IState) => {
            state.loading = true;
        },
        setActiveGenre: (state: IState, action) => {
            state.activeGenre = action.payload;
        },
        setSortItem: (state: IState, action) => {
            state.sortItem = action.payload;
        },
        setEditMovieList: (state: IState, action) => {
            state.editMovieList = action.payload;
        },
        setSearchString: (state: IState, action) => {
            state.searchString = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload.data;
            state.totalAmount = action.payload.totalAmount;
            state.loading = false;
            state.editMovieList = false;
            state.error = null;
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.error = action.error;
            state.loading = false;
            state.editMovieList = false;
        });
    },
});

export default slice.reducer;

export const { getMoviesStart, setActiveGenre, setSortItem, setEditMovieList, setSearchString } = slice.actions;
