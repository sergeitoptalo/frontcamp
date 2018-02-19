import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import LoginForm from './loginForm.jsx';


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    render() {
        return (
            <div className="container">
                <LoginForm />
            </div>
        )
    }
}
