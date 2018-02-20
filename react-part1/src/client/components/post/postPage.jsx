import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Post from './post';

import { getPost } from '../../api/postApi';

export default class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                _id: null,
                postText: null,
                date: null,
                author: {
                    userName: null
                }
            }
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.history.goBack();
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            getPost(this.props.match.params.id)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.setState({ post: data });
                })
        }
    }

    render() {
        const { post } = this.state;

        return (
            <Fragment>
                <div className="post-page container mt-4">
                    <Post post={post} handleDelete={this.handleDelete} single={true} />
                </div>
            </Fragment>
        )
    }
}
