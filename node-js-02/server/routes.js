const routes = require('express').Router();
const Blog = require('./schema').Blog;
const passport = require('passport');


/* routes.get('/', (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect('/loginPage');
    } else {
        req.logout();
        res.status(200).render('index');
    }
}) */

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
    ]
        , (err, blogs) => {
            res.status(200).render('index', { blogs: blogs });
        })
});

routes.get('/loginPage', (req, res) => {
    res.status(200).render('loginPage');
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
