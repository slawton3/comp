import Home from './pages/Home';
import Search from './pages/Search';


import { FC } from 'react';
import SearchID from './pages/SearchID';

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
    },
    {
        key: 'search-route-by-id',
        title: 'Search by ID',
        path: '/search/:id',
        enabled: true,
        component: SearchID
    }
]