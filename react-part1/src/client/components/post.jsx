import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../api/postApi';
import { withRouter } from 'react-router';

import { getFullDate } from '../utilities/dateTransform/getFullDate';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.deletePostHandler = this.deletePostHandler.bind(this);
    }

    deletePostHandler() {
        const { history, location, postItem } = this.props;
        deletePost(postItem._id)
            .then(response => {
                return response.json()
            })
            .then(() => {
                if (location.pathname.match(/posts\/.*/g)) {
                    history.goBack();
                } else {
                    history.go(0);
                }
            })
    }

    render() {
        const { location: { pathname: locationPath }, postItem, postItem: { author: postAuthor }, userId } = this.props;

        return (
            <div className="post">
                <Link to={`/author/${postAuthor._id}`}>{postAuthor.userName}</Link>
                <div className="post-date">{getFullDate(postItem.date).date}, {getFullDate(postItem.date).time}</div>
                <p>{postItem.postText}</p>
                <div className="post-controls">
                    {
                        postAuthor._id === userId || postAuthor === userId
                            ?
                            <Fragment>
                                <Link to={`/edit/${postItem._id}`} className="delete-post-button">Edit</Link>
                                <button onClick={this.deletePostHandler} className="delete-post-button">Delete</button>
                            </Fragment>
                            : ``
                    }
                    {
                        locationPath.match(/posts\/.*/g)
                            ? ``
                            : <Link to={`/posts/${postItem._id}`} className="post-in-new-window"></Link>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.userState.userId
});

export default withRouter(connect(mapStateToProps)(Post));
