import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../api/postApi';
import { withRouter } from 'react-router'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        }
        this.author = this.props.postItem.author._id,
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

    componentDidMount() {
        const { postItem, userId } = this.props;
        //if (postItem.author === userId || postItem.author._id === userId) {
        if (this.author === userId) {
            this.setState({ isEditable: true })
        }
    }

    render() {
        const { postItem } = this.props;
        const { isEditable } = this.state;

        return (
            <div className="post">
                <Link to={`/author/${postItem.author._id}`}>{postItem.author.userName}</Link>
                <div className="post-date">{postItem.date}</div>
                <p>{postItem.postText}</p>
                <Link to={`/posts/${postItem._id}`}>></Link>
                {
                    isEditable
                        ? <button onClick={this.deletePostHandler} className="delete-post-button">Delete</button>
                        : ``
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.userState.userId
});

export default withRouter(connect(mapStateToProps)(Post));
