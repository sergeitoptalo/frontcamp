import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from '../components/Post';
import Loader from '../components/Loader';
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
        const { posts, loading } = this.props;

        return (
            <div>
                {loading && !posts.length
                    ? <Loader />
                    : <div className="posts-container">
                        {posts.map((post, index) => <Post key={index} postItem={post}/>)}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.postsState.posts,
    loading: state.postsState.loading
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getPosts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
