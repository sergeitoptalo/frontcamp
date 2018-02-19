let getAllPosts = () => fetch('/api/posts', { method: 'GET' });

let getPost = (postId) => fetch(`/api/post/${postId}`, { method: 'GET'});

let createPost = (state) => fetch('/api/create-post', {
    method: 'POST',
    body: JSON.stringify(state),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

module.exports = { getAllPosts, getPost, createPost };
