import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> =
    ThunkAction<
        ReturnType,
        RootState,
        unknown,
        Action<string>
    >;
