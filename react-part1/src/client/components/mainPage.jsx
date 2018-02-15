import React from 'react';
//import { render } from 'react-dom';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state && this.props.location.state.isAuthenticated) {
            this.setState({ isAuthenticated: this.props.location.state.isAuthenticated });
        }
    }

    logout() {
        fetch('/logout', { method: 'GET' })
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({ isAuthenticated: data.isAuthenticated })
            })
    }

    render() {
        return (
            <div>
                {this.state.isAuthenticated
                    ? <div>
                        <button onClick={this.logout}>Logout</button>
                        <Link to="/add-post">Add post</Link>
                        </div>
                    : <Link to="/login">Login</Link>
                }
                Main Page
            </div>
        )
    }
}

