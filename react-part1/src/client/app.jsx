import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import MainPage from './components/mainPage.jsx';
import LoginPage from './components/loginPage.jsx';
import RegistrationPage from './components/registrationPage.jsx';
import Form from './components/form.jsx';

const App = ({ data }) => (
    <div>
        <header>
            <Link to="/">App</Link>
            <Link to="/add-post">Add post</Link>
            <Link to="/login">Login</Link>
        </header>
        <Switch>
            <Route exact path="/" component={MainPage} data={data}/>
            <Route exact path="/add-post" component={Form} data={data}/>
            <Route exact path="/login" component={LoginPage} data={data}/>
            <Route path="/registration" component={RegistrationPage} />
            <Redirect to="/" />
        </Switch>
    </div>
)

export default App;
