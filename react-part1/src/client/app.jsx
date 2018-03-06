import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'isomorphic-fetch';

import routes from './routes';

import MainPage from './containers/MainPage';
import UsersPage from './containers/UsersPage';
import { logout } from './actions/user';

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
                    ? <li><button onClick={props.logout}>Logout</button></li>
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

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
