import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import 'isomorphic-fetch';

import routes from './routes';

import MainPage from './containers/MainPage';
import UsersPage from './containers/UsersPage';

const App = (props) => (
    <div>
        <header className="app-header">
            <ul>
                <li><Link to="/">Home</Link></li>
                {props.isAuthenticated
                    ? <li><Link to="/add-post">Add post</Link></li>
                    : ``
                }
                {props.isAuthenticated
                    ? <li><Link to="/logout">Logout</Link></li>
                    : <li><Link to="/login">Login</Link></li>
                }
            </ul>
        </header>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </div>
);

const mapStateToProps = state => ({
    isAuthenticated: state.userState.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(App));
