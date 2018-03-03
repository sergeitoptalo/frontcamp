import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';


export default class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    render() {
        return (
            <div>
                <RegistrationForm />
            </div>
        )
    }
}
