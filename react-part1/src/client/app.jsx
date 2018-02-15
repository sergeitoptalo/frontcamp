import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import MainPage from './components/mainPage.jsx';
import LoginPage from './components/loginPage.jsx';
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
                    <Route exact path="/add-post" component={Form} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route path="/registration" component={RegistrationPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}
