import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Post from './post/post';

import { getAuthor } from '../api/authorApi';

export default class AuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            posts: [],
            author: null
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({ id: this.props.match.params.id });

            this.renderAuthorPosts();
        }
    }

    renderAuthorPosts() {
        getAuthor(this.props.match.params.id)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ author: data });
            });
    }

    handleDelete() {
        this.renderAuthorPosts();
    }

    render() {
        const { author } = this.state;

        return (
            <div className="container mt-3">
                {author
                    ? (<h2>{author.userName}</h2>)
                    : ``}
                {author && author.posts.length > 0
                    ? author.posts.reverse().map((post, index) => <Post key={index} post={post} handleDelete={this.handleDelete} />)
                    : (<div>Loading...</div>)
                }
            </div>
        )
    }
}
