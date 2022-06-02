import Home from './pages/Home';
import Search from './pages/Search';


import { FC } from 'react';

interface Route {
    key: string;
    title: string;
    path: string;
    enabled: boolean;
    component: FC;
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'search-route',
        title: 'Search',
        path: '/search',
        enabled: true,
        component: Search
    }
]