export const loadPosts = () => ({
    type: 'LOAD_POSTS',
});

export const updatePosts = posts => ({
    type: 'UPDATE_POSTS',
    payload: posts,
});

export const updateCurrentPost = post => ({
    type: 'UPDATE_CURRENT_POST',
    payload: post,
  });

export const getPosts = () => (dispatch) => {
    dispatch(loadPosts());

    return fetch('http://localhost:8000/api/posts')
        .then(res => res.json())
        .then(posts => dispatch(updatePosts(posts)));
};

export const getPostById = postId => (dispatch) => {
    dispatch(loadPosts());

    return fetch(`http://localhost:8000/api/getPost/${postId}`)
        .then(res => res.json())
        .then(post => dispatch(updateCurrentPost(post)));
};
