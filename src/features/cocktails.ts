import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDrink } from './types'



export const cocktailSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' }),
    endpoints: (builder) => ({
        getCocktailByName: builder.query<IDrink[], string>({
            query: (name) => `${name}`,
        }),
    }),
});

export const { useGetCocktailByNameQuery } = cocktailSlice; 