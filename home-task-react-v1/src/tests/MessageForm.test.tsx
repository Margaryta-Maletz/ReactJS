import React from "react";
import { render } from '@testing-library/react';
import { MessageForm } from '../components/MessageForm/';
import {Provider} from "react-redux";
import {store} from "../store/store";

const setVisibleMessageForm = jest.fn();

describe('make snapshot', () => {
    test('renders', () => {
        const { container } = render(
            <Provider store={store}>
                <MessageForm setVisible={setVisibleMessageForm} title="delete movie" message="Are you sure you want to delete this movie?" deletedId={0}/>
            </Provider>);
        expect(container).toMatchSnapshot();
    });
});
