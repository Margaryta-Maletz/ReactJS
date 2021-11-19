import {configureStore} from '@reduxjs/toolkit';
import reducer from './slice';

export const store = configureStore({
    reducer
});

export type RootState = ReturnType<typeof store.getState>;
