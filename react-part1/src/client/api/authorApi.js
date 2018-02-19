let getAuthor = () => fetch('/api/posts', { method: 'GET' });

module.exports = { getAuthor };
