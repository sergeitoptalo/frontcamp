import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './formComponents/Form';
import Input from './formComponents/Input';
import FormMessage from './formComponents/FormMessage';
import { loginHandler } from '../api/userApi';
import { loginSuccess } from '../actions/user';
import { atLeastOneEmptyField } from '../utilities/validation/emptyFieldsValidation';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            login: '',
            password: '',
            message: {
                text: '',
                status: 'danger'
            },
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
                .then((data) => {
                    if (data.message) {
                        const { text, status } = data.message;
                        return this.setState({ message: { text, status } });
                    }
                    return this.props.loginSuccess(data);
                })
        } else {
            this.setState({ message: { text: 'All fields must be filled', status: 'danger' } })
        }
    }

    render() {
        const { isAuthenticated, user } = this.props;
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
                        <div className="form-buttons">
                            <input type="submit" value="Login" className="button button--primary" />
                            <Link to="/" className="button button--secondary">Cancel</Link>
                        </div>
                        <Link to="/registration">Registration</Link>
                    </div>
                </Form>
                {isAuthenticated ?
                    <Redirect to={{
                        pathname: '/'
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
