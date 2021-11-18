import React from "react";
import { render } from '@testing-library/react';
import { CardPoster } from '../components/CardPoster/';
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
    const movie = store.getState().movies[0];
    it('renders', () => {
        const { container } = render(
            <Provider store={store}>
                <CardPoster {...movie}/>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
