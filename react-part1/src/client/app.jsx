import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'isomorphic-fetch';

import routes from './routes';

import MainPage from './containers/MainPage';
import UsersPage from './containers/UsersPage';

const App = ({ name }) => (
    <div>
        <div>Hello <b>{name}</b></div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </div>
);

export default App;

