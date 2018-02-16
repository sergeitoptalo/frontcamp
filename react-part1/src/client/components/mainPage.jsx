import React, { Fragment } from 'react';
//import { render } from 'react-dom';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { getFullDate } from '../utilities/getFullDate';

export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            user: null,
            posts: []
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

    componentDidMount() {
        if (this.props.location.state && this.props.location.state.isAuthenticated) {
            this.setState({ user: this.props.location.state.user, isAuthenticated: this.props.location.state.isAuthenticated });
        }
        fetch('/api/posts', { method: 'GET' })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ posts: data })
            })
    }

    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    {this.state.posts.map((post, index) => {
                        let dateObject = getFullDate(post.date);
                        return (
                            <div key={index} className="row justify-content-md-center mb-2">
                                <div className="col col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to={`/author/${post.author._id}`}>{post.author.userName}</Link>
                                            <small className="card-subtitle text-secondary float-right">{dateObject.date}, {dateObject.time}</small>
                                            <p className="card-text"> {post.postText}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}

