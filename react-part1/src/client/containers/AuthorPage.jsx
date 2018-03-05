import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from '../components/post';
import { getAuthorPosts } from '../actions/posts';

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static getData(dispatch, match) {
        return dispatch(getAuthorPosts(match.params.authorId));
    }

    componentDidMount() {
        this.props.getAuthorPosts(this.props.match.params.authorId);
    }

    render() {
        const { author, loading } = this.props;
        return (
            <div>
                {loading
                    ? <div>Loading...</div>
                    : author
                        ? author.posts.map((post, index) => <Post key={index} postItem={post} />)
                        : ``}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    author: state.postsState.currentAuthor,
    loading: state.postsState.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAuthorPosts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
