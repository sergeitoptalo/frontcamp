import MainPage from './containers/MainPage';
import UsersPage from './containers/UsersPage';
import PostPage from './containers/PostPage';
import LoginPage from './containers/LoginPage';
import RegistrationPage from './containers/RegistrationPage';
import AuthorPage from './containers/AuthorPage';
import AddPostPage from './containers/AddPostPage';

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
    {
        path: '/registration',
        component: RegistrationPage,
    },
    {
        path: '/author/:authorId',
        component: AuthorPage,
    },
    {
        path: '/add-post',
        component: AddPostPage,
    }
];
