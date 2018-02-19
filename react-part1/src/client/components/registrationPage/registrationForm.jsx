import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Input from '../formComponents/input';

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            login: '',
            password: '',
            message: '',
            isRegistered: false
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
        if (Object.keys(this.state).some(key => this.state[key] !== '')) {
            fetch('/api/register-user', {
                method: 'POST',
                body: JSON.stringify(this.state),
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
        } else {
            this.setState({ message: 'All fields must be filled' })
        }
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
                                    label={'Name'}
                                    name={'userName'}
                                    type={'text'}
                                    onChange={this.handleChange}
                                />
                                {/* <label>
                                    Name</label>
                                <input
                                    name="userName"
                                    type="text"
                                    onChange={this.handleChange}
                                    className="form-control" /> */}
                            </div>
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
                            <div>
                                <input type="submit" value="Register" className="btn btn-primary" />
                                <Link to="/login" className="btn btn-light ml-1">Cancel</Link>
                            </div>
                        </form>
                        {this.state.isRegistered ?
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
