import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../api/postApi';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        }
        this.deletePostHandler = this.deletePostHandler.bind(this);
    }

    deletePostHandler() {
        deletePost(this.props.postItem._id)
            .then(response => {
                return response.json()
            })
            .then(() => this.props.history.goBack())
    }

    componentDidMount() {
        const { postItem, userId } = this.props;
        if (postItem.author === userId || postItem.author._id === userId) {
            this.setState({ isEditable: true })
        }
    }

    render() {
        const { postItem } = this.props;
        const { isEditable } = this.state;

        return (
            <div className="post">
                <Link to={`/author/${postItem.author._id}`}>{postItem.author.userName}</Link>
                <div>{postItem.date}</div>
                <p>{postItem.postText}</p>
                <Link to={`/posts/${postItem._id}`}>></Link>
                {
                    isEditable
                        ? <button onClick={this.deletePostHandler}>Delete post</button>
                        : ``
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.userState.userId
});

export default connect(mapStateToProps)(Post);
