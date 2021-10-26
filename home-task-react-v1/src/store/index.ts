import thunk from 'redux-thunk';
import {configureStore, getDefaultMiddleware, ThunkAction, Action} from '@reduxjs/toolkit';
import rootReducer from './slice';

const middleware = getDefaultMiddleware({
    imitableCheck: false,
    serializableCheck: false,
    thunk: true,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

/*export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> =
    ThunkAction<
        ReturnType,
        RootState,
        unknown,
        Action<string>
    >;*/
