import * as postApi from '../api/postApi';

export const loadPosts = () => ({
    type: 'LOAD_POSTS',
});

export const updatePosts = posts => ({
    type: 'UPDATE_POSTS',
    payload: posts
});

export const updateCurrentPost = post => ({
    type: 'UPDATE_CURRENT_POST',
    payload: post
});

export const updateCurrentAuthor = author => ({
    type: 'UPDATE_CURRENT_AUTHOR',
    payload: author
});

export const getPosts = () => (dispatch) => {
    dispatch(loadPosts());

    return postApi.getPosts()
        .then(res => res.json())
        .then(posts => dispatch(updatePosts(posts.reverse())));
};

export const getPostById = postId => (dispatch) => {
    dispatch(loadPosts());

    return fetch(`http://localhost:8000/api/getPost/${postId}`)
        .then(res => res.json())
        .then(post => dispatch(updateCurrentPost(post)));
};

export const getAuthorPosts = authorId => (dispatch) => {
    dispatch(loadPosts());

    return fetch(`http://localhost:8000/api/author/${authorId}`)
        .then(res => res.json())
        .then(currentAuthor => dispatch(updateCurrentAuthor(currentAuthor)));
};
