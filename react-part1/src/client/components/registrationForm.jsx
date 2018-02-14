import React from 'react';

export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            login: '',
            password: ''
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
        fetch('/register-user', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label>
                            Name</label>
                        <input
                            name="userName"
                            type="text"
                            onChange={this.handleChange}
                            className="form-control" />
                    </div>
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
                    <input type="submit" value="Register" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}
