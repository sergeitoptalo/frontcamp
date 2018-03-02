import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from './formComponents/Input';
import { loginHandler } from '../actions/user';

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
        event.preventDefault();
        this.props.loginHandler(this.state);
    }

    render() {
        const { message, isAuthenticated, user } = this.props;

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
                                    <input type="submit" value="Login" className="btn btn-primary" />
                                    <Link to="/" className="btn btn-light ml-1">Cancel</Link>
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
                </div>
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
    loginHandler,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
