import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {IMovie, IState} from "./types";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async () => {
        const url = new URL("http://localhost:4000/movies");

/*        const params = {
            filter: (props.genre ?? []).join(' & '),
            sortBy: props.sort ?? "title",
        };

        url.search = new URLSearchParams(params).toString();*/

        //const responseJson = await fetch(url.toString());
        const responseJson = await fetch("http://localhost:4000/movies");
        const response = await responseJson.json();

        return response.data;
    }
);

const slice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getMoviesStart: (state: IState) => {
            state.loading = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.error = action.error;
            state.loading = false;
        });
    },
});

export default slice.reducer;

export const { getMoviesStart } = slice.actions;
