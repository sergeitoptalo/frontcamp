import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'isomorphic-fetch';

import routes from './routes';

import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

const App = ({ name }) => (
    <div>
        <div>Hello <b>{name}</b></div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </div>
);

App.propTypes = {
    name: PropTypes.string.isRequired,
};

export default App;

