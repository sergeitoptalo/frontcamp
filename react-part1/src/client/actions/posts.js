export const loadPosts = () => ({
    type: 'LOAD_POSTS',
});

export const updatePosts = posts => ({
    type: 'UPDATE_POSTS',
    payload: posts,
});

export const getPosts = () => (dispatch) => {
    dispatch(loadPosts());

    fetch('/api/posts')
        .then(res => res.json())
        .then(posts => dispatch(updatePosts(posts)));
};
