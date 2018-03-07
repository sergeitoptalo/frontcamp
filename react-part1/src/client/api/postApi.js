import { appConfig } from '../../config/appConfig';

export const getPosts = (post) => fetch('http://localhost:8000/api/posts');

export const createPost = (post) => fetch(`${appConfig.host}/api/create-post`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export const deletePost = (postId) => fetch(`http://localhost:8000/api/delete/${postId}`, { method: 'DELETE' });
