import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

export default [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/users',
        component: UsersPage,
    },
];
