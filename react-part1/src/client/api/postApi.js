export const createPost = (post) => fetch('http://localhost:8000/api/create-post', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
