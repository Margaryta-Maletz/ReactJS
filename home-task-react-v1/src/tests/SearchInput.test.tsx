import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import { SearchInput } from '../components/SearchInput/';
import {Provider} from "react-redux";
import {store} from "../store/store";
import '@testing-library/jest-dom/extend-expect';
const mockHistory = {
    push: jest.fn(),
    location: {
        pathname: "/test"
    }
};

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "/"
    }),
    useHistory: () => mockHistory
}));

describe('make snapshot', () => {
    it('renders', () => {
        const { container } = render(
            <Provider store={store}>
                <SearchInput />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});

describe('search string', () => {
    beforeEach(() => { jest.clearAllMocks() });

    it('test input', () => {
        render(
            <Provider store={store}>
                <SearchInput />
            </Provider>
        );
        let searchStringInput = screen.getByPlaceholderText('What do you want to watch?');
        expect(searchStringInput).toBeInTheDocument();
        fireEvent.change(searchStringInput, { target: { value: 'test' } });
        expect(searchStringInput).toHaveValue('test');

        let searchButton = screen.getByText('search');
        fireEvent.click(
            searchButton,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(store.getState().editMovieList).toBe(true);
        expect(mockHistory.push).toBeCalledTimes(1);
        expect(mockHistory.push).toBeCalledWith("/search/test?");
    });
});
