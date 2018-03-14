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
import { logout } from './actions/user';

const App = (props) => (
    <div>
        <header className="app-header">
            <div className="logo">
                <Link to="/">App</Link>
            </div>
            <div className="app-controls">
                {props.userName
                    ? <div className="user">
                        <Link to={`/author/${props.userId}`}>{props.userName}</Link>
                    </div>
                    : ``
                }
                {props.isAuthenticated
                    ? <Link to="/add-post" className="button button--primary">Add post</Link>
                    : ``
                }
                {props.isAuthenticated
                    ? <button onClick={() => { props.logout(props.history) }} className="button button--primary">Logout</button>
                    : <Link to="/login" className="button button--primary">Login</Link>
                }
            </div>
        </header>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
        <div className="overlay"></div>
    </div >
);

const mapStateToProps = state => ({
    isAuthenticated: state.userState.isAuthenticated,
    userName: state.userState.userName,
    userId: state.userState.userId
});

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
