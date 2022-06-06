import { configureStore } from '@reduxjs/toolkit';
import { cocktailSlice } from '../features/cocktails';
import searchSlice from '../features/search';


export const store = configureStore({
    reducer: {
        search: searchSlice,
        cocktails: cocktailSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;