const routes = require('express').Router();
const Blog = require('./schema');

/* routes.get('/', (req, res) => {
    res.status(200).sendFile('index.html', { root:  __dirname });
}); */

/* routes.get('/blogs', (req, res) => {
    let blogsIds = Object.keys(blogs);
    let blogsTitles = [];
    blogsIds.forEach(blog => blogsTitles.push(blogs[blog].title));
    res.status(200).render('blogs', { title: 'Blogs', blogs: blogsTitles, urls: blogsIds });
});

routes.get('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    if (!blogs[blogId]) {
        res.status(404).render('pageNotFound', { title: 'Error', message: 'There is no such blog' })
    } else {
        res.status(200).render('blog', {
            title: blogId,
            header: blogs[blogId].title,
            text: blogs[blogId].text,
            date: blogs[blogId].date
        });
    }
});

routes.post('/blogs', (req, res) => {
    res.status(200).json({ type: req.method });
}); */

routes.get('/blogs', (req, res) => {
    Blog.aggregate([
        {
            $group: {
                _id: {
                    id: "$_id",
                    title: "$title",
                    date: "$date"
                }
            }
        },
        {
            $sort: {
                "_id.date": -1

            }
        }
    ]
        , (err, blogs) => {
            res.send(blogs);
        })
});

routes.get('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    Blog.findById(blogId, (err, blog) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(blog);
        }
    });
});

routes.post('/add-blog', (req, res) => {
    const note = req.body;
    const blog = new Blog(req.body);
    blog.save(note, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send('added');
        }
    });
});

/* routes.put('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    res.status(200).json({ type: req.method, id: blogId });
});

routes.delete('/blogs/:id', (req, res) => {
    let blogId = req.params.id;
    res.status(200).json({ type: req.method, id: blogId });
});

routes.use(function (req, res, next) {
    res.status(404).render('pageNotFound', { title: 'Error', message: 'Page not found' })
}) */

module.exports = routes;
