import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        fetch('/loginHandler', {
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
                this.setState({ isAuthenticated: data.isAuthenticated })
            })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Login</label>
                        <input
                            name="login"
                            type="text"
                            onChange={this.handleChange}
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>
                            Password</label>
                        <input
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                            className="form-control" />
                    </div>
                    <input type="submit" value="Add" className="btn btn-primary" />
                </form>
                <div>
                    {this.state.message}
                </div>
                {this.state.isAuthenticated ?
                    <Redirect to="/" />
                    : ``
                }
            </div>
        )
    }
}
