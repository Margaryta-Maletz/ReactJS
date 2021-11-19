import React from "react";
import { initialState } from '../store/initialState';
import { render } from '@testing-library/react';
import { AddMovie } from '../components/AddMovie/';
import {Provider} from "react-redux";
import {store} from "../store/store";

describe('make snapshot', () => {
    it('renders without movie', () => {
        const { container } = render(
            <Provider store={store}>
                <AddMovie setVisibleAddMovie={(value=false) => {return value}}/>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
    it('renders with movie', () => {
        const { container } = render(
            <Provider store={store}>
                <AddMovie movie={initialState.movies[0]} setVisibleAddMovie={(value=false) => {return value}}/>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
