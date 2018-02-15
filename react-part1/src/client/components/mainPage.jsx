import React from 'react';
//import { render } from 'react-dom';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            user: null,
            posts: []
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state && this.props.location.state.isAuthenticated) {
            this.setState({ user: this.props.location.state.user, isAuthenticated: this.props.location.state.isAuthenticated });
        }
        fetch('/posts', { method: 'GET' })
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({ posts: data })
            })
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
                        <Link to={{ pathname: '/add-post', params: { user: this.state.user } }}>Add post</Link>
                        <div>{this.state.user.userName}</div>
                    </div>
                    : <Link to="/login">Login</Link>
                }
                <div>
                    {this.state.posts.map((post, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/author/${post.author._id}`}>{post.author.userName}</Link>
                                {post.postText}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

