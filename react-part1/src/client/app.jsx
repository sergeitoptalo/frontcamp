import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import MainPage from './components/mainPage.jsx';
import LoginPage from './components/loginPage/loginPage.jsx';
import AuthorPage from './components/authorPage.jsx';
import RegistrationPage from './components/registrationPage/registrationPage.jsx';
import AddPostPage from './components/addPostPage.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: null,
            userName: null,
            loaded: false
        }

        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.setState({ loaded: true }, () => this.setSessionInfo());
    }

    setSessionInfo() {
        if (sessionStorage.getItem('isAuthenticated') !== 'undefined') {
            this.setState({ isAuthenticated: JSON.parse(sessionStorage.getItem('isAuthenticated')) });
        };
        if (sessionStorage.getItem('user') !== 'undefined') {
            this.setState({ user: JSON.parse(sessionStorage.getItem('user')) });
        };
        if (sessionStorage.getItem('userName') !== 'undefined') {
            this.setState({ userName: JSON.parse(sessionStorage.getItem('userName')) });
        };
    }

    logout() {
        fetch('/api/logout')
            .then(response => {
                return response.json();
            })
            .then(data => {
                sessionStorage.setItem('isAuthenticated', data.isAuthenticated);
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('userName');
                this.setState({ isAuthenticated: data.isAuthenticated });
            });
    }

    render() {
        let { isAuthenticated, user, userName } = this.state;

        if (this.state.loaded) {
            isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated'));
            if (isAuthenticated) {
                user = JSON.parse(sessionStorage.getItem('user'));
                userName = JSON.parse(sessionStorage.getItem('userName'));
            }
        }

        return (
            <div>
                <header className="bg-primary p-3 d-flex justify-content-between align-items-center">
                    <Link to="/" className="text-light">App</Link>
                    {isAuthenticated
                        ? <div>
                            {user ?
                                <Fragment>
                                    <h2 className="d-inline align-middle"><i className="fas fa-user-circle text-white"></i></h2>
                                    <Link to={`/author/${user}`} className="ml-2 text-white">{userName}</Link>
                                    <Link to={{ pathname: '/add-post', params: { user: user } }} className="ml-4 btn btn-warning">Add post</Link>
                                </Fragment>
                                : ``
                            }
                            <button onClick={this.logout} className="btn btn-light ml-3">Logout</button>
                        </div>
                        : <Link to="/login" className="btn btn-light">Login</Link>
                    }
                </header>
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/add-post" component={AddPostPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/registration" component={RegistrationPage} />
                        <Route path="/author/:id" component={AuthorPage} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        )
    }
}
