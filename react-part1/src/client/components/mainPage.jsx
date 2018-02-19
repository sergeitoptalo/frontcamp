import React, { Fragment } from 'react';
//import { render } from 'react-dom';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Post from './post/post';

import { getAllPosts } from '../api/postApi';

export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            user: null,
            posts: [],
            loaded: false,
            refresh: false
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    renderPosts() {
        getAllPosts()
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({ posts: data })
        })
    }

    handleDelete() {
        this.renderPosts();       
    }

    componentDidMount() {
        if (!this.state.loaded) {
            this.setState({ loaded: true });
        }

        if (this.props.location.state && this.props.location.state.isAuthenticated) {
            this.setState({ user: this.props.location.state.user, isAuthenticated: this.props.location.state.isAuthenticated });
        }

       this.renderPosts();
    }

    render() {
        let userFromStorage = null;

        if (this.state.loaded) {
            userFromStorage = sessionStorage.getItem('user') !== 'undefined' ? JSON.parse(sessionStorage.getItem('user')) : null;
        }

        return (
            <Fragment>
                <div className="container mt-3">
                    {this.state.posts.map((post, index) => <Post key={index} post={post} handleDelete={this.handleDelete} />)}
                </div>
            </Fragment>
        )
    }
}

