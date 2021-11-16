import React from "react";
import { render } from '@testing-library/react';
import { ResultsSort } from '../components/ResultsSort/';
import {Provider} from "react-redux";
import { store } from '../store/store'

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:8080/search/"
    }),
    useHistory: (path: string) => ({
        push: jest.fn(),
        location: {
            pathname: "localhost:8080/search/" + path
        }
    })
}));


describe('make snapshot', () => {
    test('renders', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <ResultsSort />
            </Provider>
        );
        expect(asFragment).toMatchSnapshot();
    });
});
