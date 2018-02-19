import React, { Fragment } from 'react';
//import { render } from 'react-dom';
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
        fetch(`/api/delete-post/${this.state.post._id}`, { method: 'DELETE' })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ redirect: true });
                this.state.handleDelete();
            });
    }

    render() {
        let { _id, date, postText } = this.state.post;
        let author = this.state.post.author;
        let { userName } = this.state.post.author;
        let dateObject = getFullDate(date);
        let userFromStorage = sessionStorage.getItem('user') !== 'undefined' ? JSON.parse(sessionStorage.getItem('user')) : null;

        return (
            <div className="row justify-content-md-center mb-2">
                <div className="col col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <Link to={`/author/${author._id}`}>{userName}</Link>
                            {userFromStorage
                                ? author._id === userFromStorage
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
                {/*                 {this.state.redirect ?
                            <Redirect to={{
                                pathname: '/'
                            }} />
                            : ``
                        } */}
            </div>
        )
    }
}
