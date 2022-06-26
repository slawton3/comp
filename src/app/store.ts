import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cocktailApi } from '../features/cocktails';
import type { PreloadedState } from '@reduxjs/toolkit'
import searchSlice from '../features/search';
import { setupListeners } from '@reduxjs/toolkit/query'


const rootReducer = combineReducers({
    [cocktailApi.reducerPath]: cocktailApi.reducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
            getDefaultMiddleware().concat(cocktailApi.middleware),
        preloadedState,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
