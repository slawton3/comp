import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAlcoholicDrinks, IDrinks } from './types'



export const cocktailApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getCocktailByName: builder.query<IDrinks, string>({
            query: (name: string) => `/search.php?s=${name}`,
        }),
        getCocktailByLetter: builder.query<IDrinks, string>({
            query: (letter: string) => `/search.php?f=${letter}`,
        }),
        getCocktailByIngredient: builder.query<IDrinks, string>({
            query: (ingredient: string) => `/search.php?i=${ingredient}`,
        }),
        getCocktailByID: builder.query<IDrinks, string>({
            query: (id: string) => `/lookup.php?i=${id}`,
        }),
        getIngredientByID: builder.query<IDrinks, string>({
            query: (ingredient: string) => `/lookup.php?iid=${ingredient}`,
        }),
        getRandomCocktail: builder.query<IDrinks, string>({
            query: () => `/random.php`,
        }),
        getRandomCocktails: builder.query<IDrinks, string>({
            query: () => `/randomselection.php`,
        }),
        getLatestCocktails: builder.query<IDrinks, string>({
            query: () => `/latest.php`,
        }),
        getMostPopularCocktails: builder.query<IDrinks, string>({
            query: () => `/popular.php`,
        }),
        getFilterByIngredient: builder.query<IDrinks, string>({
            query: (ingredient: string) => `/filter.php?i=${ingredient}`,
        }),
        getFilterByManyIngredients: builder.query<IDrinks, string>({
            query: (ingredients: string) => `/filter.php?i=${ingredients}`,
        }),
        getFilterByAlc: builder.query<IAlcoholicDrinks, string>({
            query: () => `/filter.php?a=Alcoholic`,
        }),
        getFilterByNA: builder.query<IAlcoholicDrinks, string>({
            query: () => `/filter.php?a=Non_Alcoholic`,
        }),
        getFilterByGlass: builder.query<IAlcoholicDrinks, string>({
            query: (glass: string) => `/filter.php?g=${glass}`,
        })
    }),
});

export const { useGetCocktailByNameQuery } = cocktailApi; 