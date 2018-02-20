import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { getFullDate } from '../../utilities/getFullDate';

export default class Post extends React.Component {
    constructor(props) {
        super();
        this.state = {
            post: props.post,
            redirect: false,
            handleDelete: props.handleDelete
        }

        this.deletePost = this.deletePost.bind(this);
    }

    deletePost() {
        fetch(`/api/delete-post/${this.props.post._id}`, { method: 'DELETE' })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ redirect: true });
                this.state.handleDelete();
            });
    }

    render() {
        const { _id, date, postText } = this.props.post;
        const author = this.props.post.author;
        const { userName } = this.props.post.author;
        const dateObject = getFullDate(date);
        const { single } = this.props;
        const userFromStorage = sessionStorage.getItem('user') !== 'undefined' ? JSON.parse(sessionStorage.getItem('user')) : null;

        return (
            <div className="row justify-content-md-center mb-2">
                <div className="col col-sm-6">
                    {!single ?
                        <Link to={`/post/${_id}`} className="position-absolute" style={{ 'bottom': '2px', 'right': '25px', 'zIndex': '100' }}>
                            <i className="fas fa-expand"></i>
                        </Link>
                        : ``
                    }
                    <div className="card" style={{ 'display': 'block' }}>
                        <div className="card-body">
                            <Link to={`/author/${author._id}`}>{userName}</Link>
                            {userFromStorage
                                ? author._id === userFromStorage || author === userFromStorage
                                    ? <button
                                        className="btn btn-light btn-sm position-absolute"
                                        style={{ top: '2px', right: '2px' }}
                                        onClick={this.deletePost}>
                                        <i className="fas fa-trash text-secondary"></i>
                                    </button>
                                    : ``
                                : ``}
                            <small className="card-subtitle text-secondary float-right mr-4">{dateObject.date}, {dateObject.time}</small>
                            <p className="card-text"> {postText}</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
