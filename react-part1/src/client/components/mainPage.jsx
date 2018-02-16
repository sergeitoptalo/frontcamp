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
            posts: [],
            loaded: false
        }

        this.deletePost = this.deletePost.bind(this);
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
        if (!this.state.loaded) {
            this.setState({ loaded: true });
        }

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

/*     deletePost(postId) {
        fetch(`/api/delete-post/${postId}`, { method: 'DELETE' })
            .then(
                fetch('/api/posts', { method: 'GET' })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.setState({ posts: data })
                    })
            )
    } */

    render() {
        let userFromStorage = null;

        if (this.state.loaded) {
            userFromStorage = sessionStorage.getItem('user') !== 'undefined' ? JSON.parse(sessionStorage.getItem('user')) : null;
        }

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
                                            {userFromStorage
                                                ? post.author._id === userFromStorage
                                                    ? <button
                                                        className="btn btn-light btn-sm position-absolute"
                                                        style={{ top: '2px', right: '2px' }}
                                                        onClick={this.deletePost}>
                                                        <i className="fas fa-trash text-secondary"></i>
                                                    </button>
                                                    : ``
                                                : ``}
                                            <small className="card-subtitle text-secondary float-right mr-4">{dateObject.date}, {dateObject.time}</small>
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

