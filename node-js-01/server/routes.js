const routes = require('express').Router();
const blogs = require('./blogs.json');

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

routes.get('/blogs', (req, res) => {
    res.status(200).json(blogs);
});

routes.get('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    res.status(200).json(blogs[blogId]);
});

routes.post('/blogs', (req, res) => {
    res.status(200).json({ type: 'POST' });
});

routes.put('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    res.status(200).json({ type: 'PUT', id: blogId });
});

routes.delete('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    res.status(200).json({ type: 'DELETE', id: blogId });
});

module.exports = routes;




/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/blogs', (req, res) => res.send(articles));

app.get('/blogs/:id', (req, res) => {
    res.send(req.params.id);
});

app.post('/blogs', (req, res) => {
    res.send(req.method)
});

app.put('/blogs', (req, res) => {
    res.send(req.method)
})

app.delete('/blogs', (req, res) => {
    res.send(req.method)
}) */
