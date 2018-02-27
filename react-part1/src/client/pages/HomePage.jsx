import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPosts } from '../actions/posts';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    /*     this.state = {
          posts: [],
          loading: false
        } */
  }
  static defaultProps = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props;
    
    return (
      <div>
        <h2>UsersPage</h2>
        {loading
          ? <div>Loading...</div>
          : <div>
            {posts.map((post, index) => <div key={index}>{post.postText}</div>)}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  loading: state.postReducer.loading
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getPosts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
