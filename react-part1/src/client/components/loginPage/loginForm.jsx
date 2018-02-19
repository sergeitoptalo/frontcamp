import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Input from '../formComponents/input';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            login: '',
            password: '',
            message: '',
            isAuthenticated: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        fetch('/api/loginHandler', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.message) {
                    this.setState({ message: data.message.message })
                }

                sessionStorage.setItem('isAuthenticated', data.isAuthenticated);
                sessionStorage.setItem('user', JSON.stringify(data.user._id));
                sessionStorage.setItem('userName', JSON.stringify(data.user.userName));
                this.setState({ user: data.user, isAuthenticated: data.isAuthenticated })
            })
    }

    render() {
        return (
            <div className="container m-3">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-5">
                        <form onSubmit={this.handleSubmit} className="p-4 bg-white rounded border">
                            {this.state.message ?
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                                : ``
                            }
                            <div className="form-group">
                                <Input
                                    label={'Login'}
                                    name={'login'}
                                    type={'text'}
                                    onChange={this.handleChange}
                                />

                                {/* <label>
                                    Login</label>
                                <input
                                    name="login"
                                    type="text"
                                    onChange={this.handleChange}
                                    className="form-control" /> */}
                            </div>
                            <div className="form-group">
                                <Input
                                    label={'Password'}
                                    name={'password'}
                                    type={'password'}
                                    onChange={this.handleChange}
                                />
                                {/* <label>
                                    Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                    className="form-control" /> */}
                            </div>
                            <div className="form-group d-flex justify-content-between align-items-center">
                                <div>
                                    <input type="submit" value="Login" className="btn btn-primary" />
                                    <Link to="/" className="btn btn-light ml-1">Cancel</Link>
                                </div>
                                <Link to="/registration">Registration</Link>
                            </div>
                        </form>
                        {this.state.isAuthenticated ?
                            <Redirect to={{
                                pathname: '/',
                                state: { user: this.state.user, isAuthenticated: this.state.isAuthenticated }
                            }} />
                            : ``
                        }
                    </div>
                </div>
            </div>
        )
    }
}
