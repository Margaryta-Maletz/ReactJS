import React from "react";
import { render } from '@testing-library/react';
import { AddMovie } from '../components/AddMovie/';
import {Provider} from "react-redux";
import {store} from "../store/store";

describe('make snapshot', () => {
    test('renders', () => {
        const { container } = render(
            <Provider store={store}>
                <AddMovie setVisibleAddMovie={(value=false) => {return value}}/>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
