import { appConfig } from '../../config/appConfig';

export const getPosts = () => {
    return fetch(`${appConfig.host}/api/posts`)
};

export const getPost = (postId) => fetch(`${appConfig.host}/api/getPost/${postId}`);

export const getAuthor = (authorId) => fetch(`${appConfig.host}/api/author/${authorId}`);

export const createPost = (post) => fetch(`${appConfig.host}/api/create-post`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export const updatePost = (post) => fetch(`${appConfig.host}/api/update/${post.postId}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export const deletePost = (postId) => fetch(`${appConfig.host}/api/delete/${postId}`, { method: 'DELETE' });
