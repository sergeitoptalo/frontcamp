import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from '../components/post';
import { getPosts } from '../actions/posts';


class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static getData(dispatch) {
        return dispatch(getPosts());
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts, loading, userId } = this.props;

        return (
            <div>
                {loading && !posts.length
                    ? <div>Loading...</div>
                    : <div className="posts-container">
                        {posts.map((post, index) => <Post key={index} postItem={post} userId={userId} />)}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.postsState.posts,
    loading: state.postsState.loading,
    userId: state.userState.userId
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getPosts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
