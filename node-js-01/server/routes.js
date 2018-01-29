const routes = require('express').Router();
const blogs = require('./blogs.json');
let logger = require('../logger');

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
    log(req);
});

routes.get('/blogs', (req, res) => {
    res.status(200).json(blogs);
    log(req);
});

routes.get('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    if (!blogs[blogId]) {
        res.status(404).render('pageNotFound', { title: 'Error', message: 'There is no such blog' })
    } else {
        res.status(200).json(blogs[blogId]);
    }
    log(req);
});

routes.post('/blogs', (req, res) => {
    res.status(200).json({ type: req.method });
    log(req);
});

routes.put('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    res.status(200).json({ type: req.method, id: blogId });
    log(req);
});

routes.delete('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    res.status(200).json({ type: req.method, id: blogId });
    log(req);
});

routes.use(function (req, res, next) {
    res.status(404).render('pageNotFound', { title: 'Error', message: 'Page not found' })
})

let log = (req) => {
    logger.log({
        level: 'info',
        url: req.headers.host + req.url,
        method: req.method,
        date: new Date()
    });
}

module.exports = routes;
