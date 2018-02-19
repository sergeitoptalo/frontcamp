let getAllPosts = () => fetch('/api/posts', { method: 'GET' });

module.exports = { getAllPosts };
