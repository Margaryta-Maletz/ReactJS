import React from "react";
import { render } from '@testing-library/react';
import { Header } from '../components/Header/';
import { Provider } from "react-redux";
import { store } from "../store/store";

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
    }),
    useParams: jest.fn().mockReturnValue({ searchQuery: '' }),
}));

jest.mock('../components/ErrorBoundary/');

describe('make snapshot', () => {
    it('renders', () => {
        const { container } = render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
