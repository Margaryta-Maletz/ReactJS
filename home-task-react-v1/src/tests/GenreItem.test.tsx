import React from "react";
import { render } from '@testing-library/react';
import { GenreItem } from '../components/GenreItem/';
import {Provider} from "react-redux";
import {store} from "../store/store";

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
    it('renders', () => {
        const { container } = render(
            <Provider store={store}>
                <GenreItem title="All" value={null}/>
            </Provider>);
        expect(container).toMatchSnapshot();
    });
});
