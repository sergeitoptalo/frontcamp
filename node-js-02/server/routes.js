const routes = require('express').Router();
const Blog = require('./schema').Blog;
const passport = require('passport');

routes.get('/', (req, res) => {
    console.log(req.isAuthenticated());
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
    ], (err, blogs) => {
        let isAuthenticated = req.isAuthenticated();
        res.status(200).render('index', { blogs: blogs, isAuthenticated: isAuthenticated });
    })
});

routes.get('/loginPage', (req, res) => {
    res.status(200).render('loginPage');
})

routes.get('/logout', (req, res) => {
    req.logout();
    res.status(200).redirect('/');
})

routes.get('/addBlogPage', (req, res) => {
    res.status(200).render('form');
})

routes.post('/create-blog', (req, res) => {
    req.body.date = new Date();
    const blog = new Blog(req.body);
    blog.save(req.body, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.status(200).redirect('/');
        }
    });
})

routes.post('/loginHandler', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/loginPage'
}))

routes.post('/add-user', (req, res) => {
    const user = new User(req.body);
    user.save(req.body, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send('user added');
        }
    });
});

routes.get('/blogs', (req, res) => {
    console.log(req.isAuthenticated());
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
    ], (err, blogs) => {
        res.send(blogs);
    })
});

routes.get('/blogs/:id', (req, res, next) => {
    let blogId = req.params.id;
    let isAuthenticated = req.isAuthenticated();
    Blog.findById(blogId, (err, blog) => {
        if (err) {
            next(err);
        } else {
            res.status(200).render('blog', {
                blog: blog,
                isAuthenticated: isAuthenticated
            });
        }
    });
});

routes.get('/blogs/edit/:id', (req, res, next) => {
    let blogId = req.params.id;
    let isEditing = true;
    Blog.findById(blogId, (err, blog) => {
        if (err) {
            next(err);
        } else {
            res.status(200).render('form', {
                blog: blog,
                isEditing: isEditing
            });
        }
    });
});

routes.post('/add-blog', (req, res) => {
    const blog = new Blog(req.body);
    blog.save(req.body, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send('added');
        }
    });
});


module.exports = routes;
