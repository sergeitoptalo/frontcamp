import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from '../components/Post';
import Loader from '../components/Loader';
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
            <div className="posts-container">
                {loading
                    ? <Loader />
                    : author
                        ? <div>
                            <h4>{author.userName}</h4>
                            {
                                author.posts.length > 0
                                    ? author.posts.map((post, index) => <Post key={index} postItem={post} />)
                                    : `The author has no posts`
                            }
                        </div>
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
