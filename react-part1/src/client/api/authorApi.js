let getAuthor = (authorId) => fetch(`/api/author/${authorId}`, { method: 'GET' });

module.exports = { getAuthor };
