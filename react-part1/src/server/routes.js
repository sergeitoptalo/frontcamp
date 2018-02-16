const routes = require('express').Router();
const Post = require('./schema').Post;
const User = require('./schema').User;
const passport = require('passport');
const handleRender = require('./handleRender.jsx');
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/app.jsx';
import Form from '../client/components/form.jsx';
import { Route, Link, Switch, Redirect } from 'react-router-dom';


routes.get('/*', handleRender);

module.exports = routes;
