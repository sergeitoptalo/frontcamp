import MainPage from './containers/MainPage';
import UsersPage from './containers/UsersPage';
import PostPage from './containers/PostPage';
import LoginPage from './containers/LoginPage';

export default [
    {
        path: '/',
        exact: true,
        component: MainPage,
    },
    {
        path: '/users',
        component: UsersPage,
    },
    {
        path: '/posts/:postId',
        exact: true,
        component: PostPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
];
