import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Form from './formComponents/Form';
import Input from './formComponents/Input';
import FormMessage from './formComponents/FormMessage';
import { getUsedLogin } from '../api/userApi';
import { atLeastOneEmptyField } from '../utilities/validation/emptyFieldsValidation';
import { isAlreadyUsedLogin } from '../utilities/validation/loginValidation';

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            login: '',
            password: '',
            message: {
                text: '',
                status: 'danger'
            },
            isRegistered: false,
            usedLogin: [],
            isFormDisabled: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        getUsedLogin()
            .then(response => response.json())
            .then(data => {
                this.setState({ usedLogin: data, isFormDisabled: false });
            })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { userName, login, password, usedLogin } = this.state;

        if (atLeastOneEmptyField({ userName, login, password })) {
            return this.setState({ message: { text: 'All fields must be filled', status: 'danger' } });
        }

        if (isAlreadyUsedLogin(login, usedLogin)) {
            return this.setState({ message: { text: 'Login is already in use', status: 'danger' } });
        }

        fetch('/api/register-user', {
            method: 'POST',
            body: JSON.stringify({ userName, login, password }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(isRegistered => {
                this.setState({ isRegistered })
            })
    }

    render() {
        const { isRegistered, isFormDisabled } = this.state;
        const { text: messageText, status: messageStatus } = this.state.message;

        return (
            <div className="form-container">
                <Form onSubmit={this.handleSubmit} className="app-form">
                    {
                        messageText
                            ? <FormMessage text={messageText} status={messageStatus} />
                            : ``
                    }
                    <div className="form-group">
                        <Input
                            label="Name"
                            name="userName"
                            type="text"
                            id="userName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            label="Login"
                            name="login"
                            type="text"
                            id="login"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Register" className="button button--primary" disabled={isFormDisabled} />
                        <Link to="/login" className="button button--secondary">Cancel</Link>
                    </div>
                </Form>
                {isRegistered ?
                    <Redirect to={{
                        pathname: '/login'
                    }} />
                    : ``
                }
            </div>
        )
    }
}
