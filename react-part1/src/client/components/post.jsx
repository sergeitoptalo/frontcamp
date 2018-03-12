import React from 'react';
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
        let _this = this;
        deletePost(this.props.postItem._id)
            .then(response => {
                return response.json()
            })
            .then(() => {
                if (_this.props.location.pathname.match(/posts\/.*/g)) {
                    _this.props.history.goBack();
                } else {
                    _this.props.history.go(0);
                }
            })
    }

    render() {
        const { postItem, userId } = this.props;

        return (
            <div className="post">
                <Link to={`/author/${postItem.author._id}`}>{postItem.author.userName}</Link>
                <div className="post-date">{getFullDate(postItem.date).date}, {getFullDate(postItem.date).time}</div>
                <p>{postItem.postText}</p>
                <div className="post-controls">
                    {
                        postItem.author._id === userId
                            ? <button onClick={this.deletePostHandler} className="delete-post-button">Delete</button>
                            : ``
                    }
                    {
                        this.props.location.pathname.match(/posts\/.*/g)
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
