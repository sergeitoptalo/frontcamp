import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import MainPage from './components/mainPage.jsx';
import LoginPage from './components/loginPage.jsx';
import AuthorPage from './components/authorPage.jsx';
import RegistrationPage from './components/registrationPage.jsx';
import Form from './components/form.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">App</Link>
                </header>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/add-post" component={Form} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/registration" component={RegistrationPage} />
                    <Route path="/author/:id" component={AuthorPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}
