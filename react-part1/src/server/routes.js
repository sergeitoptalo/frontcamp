const routes = require('express').Router();
const Blog = require('./schema').Blog;
const passport = require('passport');
const handleRender = require('./handleRender.jsx');
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/app.jsx';
import Form from '../client/components/form.jsx';

//routes.get('/*', handleRender);
routes.get('/', (req, res) => {
    let page = handleRender(<App name="All posts" />);
    res.send(page);
});

routes.get('/add-post', (req, res) => {
    let page = handleRender(<Form />);
    res.send(page);
});

/*   
routes.get('/', (req, res) => {
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
        blogs.forEach(blog => {
            blog._id.date = `${new Date(blog._id.date).toDateString()}`
        })
        let isAuthenticated = req.isAuthenticated();
        res.status(200).render('index', { blogs: blogs, isAuthenticated: isAuthenticated });
    })
});


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
    ], (err, blogs) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(blogs);
        }
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



routes.get('/loginPage', (req, res) => {
    res.status(200).render('loginPage');
});

routes.get('/logout', (req, res) => {
    req.logout();
    res.status(200).redirect('/');
});

routes.post('/loginHandler', function (req, res, next) {
    passport.authenticate('local', function (err, user, message) {
        if (!user) {
            return res.render('loginPage', { message: message.message });
        }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            return res.redirect('/');
        });
    })(req, res, next)
});



routes.get('/addBlogPage', (req, res) => {
    res.status(200).render('form', { isEditing: false });
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

routes.post('/update-blog/:id', (req, res) => {
    let blogId = req.params.id;
    req.body.updated = new Date();
    Blog.findByIdAndUpdate(blogId, req.body, function (err, docs) {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.status(200).redirect('/');
        }
    });
});



routes.get('/delete/:id', (req, res) => {
    let blogId = req.params.id;
    Blog.findByIdAndRemove(blogId, req.body, function (err, docs) {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.status(200).redirect('/');
        }
    });
});


routes.post('/add-user', (req, res) => {
    const user = new User(req.body);
    user.save(req.body, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send('user added');
        }
    });
}); */

module.exports = routes;
