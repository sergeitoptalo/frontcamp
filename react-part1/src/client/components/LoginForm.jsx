import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from './formComponents/Input';
import { loginHandler } from '../api/userApi';
import { loginSuccess } from '../actions/user';

import { atLeastOneEmptyField } from '../utilities/validation/emptyFieldsValidation';

class LoginForm extends React.Component {
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
        const { login, password } = this.state;
        event.preventDefault();
        if (!atLeastOneEmptyField({ login, password })) {
            loginHandler(this.state)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if (data.message) {
                        return this.setState({ message: data.message });
                    }
                    return this.props.loginSuccess(data);
                })
        } else {
            this.setState({ message: 'All fields must be filled' })
        }
        //this.props.loginHandler(this.state);
    }

    render() {
        const { isAuthenticated, user } = this.props;
        const { message } = this.state;

        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="app-form">
                    {message ?
                        <div className="alert alert-danger" role="alert">
                            {message}
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
                    </div>
                    <div className="form-group">
                        <Input
                            label={'Password'}
                            name={'password'}
                            type={'password'}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center">
                        <div>
                            <input type="submit" value="Login" className="button button--primary" />
                            <Link to="/" className="button button--secondary">Cancel</Link>
                        </div>
                        <Link to="/registration">Registration</Link>
                    </div>
                </form>
                {isAuthenticated ?
                    <Redirect to={{
                        pathname: '/',
                        // state: { user: user, isAuthenticated: isAuthenticated }
                    }} />
                    : ``
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.userState.isAuthenticated,
    userId: state.userState.userId,
    userName: state.userState.userName,
    message: state.userState.message
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loginSuccess,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
