import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from '../components/post';
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
        const { post, loading } = this.props;
        return (
            <div>
                {loading ? <div>Loading...</div> : post ? <Post postItem={post} /> : ``}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.postsState.currentPost,
    loading: state.postsState.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    getPostById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
