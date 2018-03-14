import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from '../components/Post';
import Loader from '../components/Loader';
import { getPostById } from '../actions/posts';

class PostPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static getData(dispatch, match) {
        return dispatch(getPostById(match.params.postId));
    }

    componentDidMount() {
        this.props.getPostById(this.props.match.params.postId);
    }

    render() {
        const { post, loading, userId } = this.props;
        return (
            <div className="posts-container">
                {loading ? <Loader /> : post ? <Post postItem={post} /> : ``}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.postsState.currentPost,
    loading: state.postsState.loading,
    userId: state.userState.userId
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getPostById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
