const apiRoutes = require('express').Router();
const Post = require('./schema').Post;
const User = require('./schema').User;
const passport = require('passport');
const handleRender = require('./handleRender.jsx');
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/app.jsx';
import Form from '../client/components/form.jsx';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

apiRoutes.get('/posts', function (req, res) {
    Post.find({}).
        populate('author').
        exec(function (err, posts) {
            res.send(posts);
        });
});

apiRoutes.post('/create-post', (req, res) => {
    req.body.date = new Date();

    const user = User.findById(req.body.author, (err, user) => {
            const post = new Post({
                postText: req.body.postText,
                date: req.body.date,
                author: user._id
            });

            post.save(function (err) {
                if (err) return err.message;
                user.posts.push(post);
                user.save();
            });
            
    });
});

apiRoutes.delete('/delete-post/:id', (req, res) => {
    let blogId = req.params.id;
    Blog.findByIdAndRemove(blogId, req.body, function (err, post) {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(post);
        }
    });
});

apiRoutes.get('/author/:id', (req, res) => {
    let authorId = req.params.id;
    User.findById(authorId)
        .populate('posts')
        .exec(function (err, author) {
            res.send(author);
        });
});


apiRoutes.post('/register-user', function (req, res, next) {
    const user = new User(req.body);
    user.save(req.body, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send('added');
        }
    });
});

apiRoutes.post('/loginHandler', function (req, res, next) {
    passport.authenticate('local', function (err, user, message) {
        req.logIn(user, function (err) {
        });

        let isAuthenticated = req.isAuthenticated();
        //handleRender(req, res);
        return res.json({ user: user, message: message, isAuthenticated: isAuthenticated });
    })(req, res, next)
});

apiRoutes.get('/logout', (req, res) => {
    req.logout();
    let isAuthenticated = req.isAuthenticated();
    return res.json({ isAuthenticated: isAuthenticated });
});

module.exports = apiRoutes;
