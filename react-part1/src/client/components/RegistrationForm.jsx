import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Input from './formComponents/Input';
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
            message: '',
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
            return this.setState({ message: 'All fields must be filled' });
        }

        if (isAlreadyUsedLogin(login, usedLogin)) {
            return this.setState({ message: 'Login is already in use' });
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
                if (response.status === 200) {
                    this.setState({ isRegistered: true });
                }
            });
    }

    render() {
        const { message, isRegistered, isFormDisabled } = this.state;

        return (
            <div className="container m-3">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-5">
                        <form onSubmit={this.handleSubmit} className="p-4 bg-white rounded border">
                            {message ?
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                                : ``
                            }
                            <div className="form-group">
                                <Input
                                    label={'Name'}
                                    name={'userName'}
                                    type={'text'}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <Input
                                    label={'Login'}
                                    name={'login'}
                                    type={'text'}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <Input
                                    label={'Password'}
                                    name={'password'}
                                    type={'password'}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <input type="submit" value="Register" className="btn btn-primary" disabled={isFormDisabled} />
                                <Link to="/login" className="btn btn-light ml-1">Cancel</Link>
                            </div>
                        </form>
                        {isRegistered ?
                            <Redirect to={{
                                pathname: '/login'
                            }} />
                            : ``
                        }
                    </div>
                </div>
            </div>
        )
    }
}
