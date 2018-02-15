const routes = require('express').Router();
const Post = require('./schema').Post;
const passport = require('passport');
const handleRender = require('./handleRender.jsx');
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/app.jsx';
import Form from '../client/components/form.jsx';
import { Route, Link, Switch, Redirect } from 'react-router-dom';


routes.get('/', handleRender);

routes.post('/create-post', (req, res) => {
    req.body.date = new Date();
    const post = new Post(req.body);
    post.save(req.body, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            handleRender(req, res);
        }
    });
});

routes.get('/logout', (req, res) => {
    req.logout();
    let isAuthenticated = req.isAuthenticated();
    return res.json({ isAuthenticated: isAuthenticated });
});

routes.post('/loginHandler', function (req, res, next) {
    passport.authenticate('local', function (err, user, message) {
        req.logIn(user, function (err) {
        });

        let isAuthenticated = req.isAuthenticated();
        return res.json({ message: message, isAuthenticated: isAuthenticated });
    })(req, res, next)
});

module.exports = routes;
