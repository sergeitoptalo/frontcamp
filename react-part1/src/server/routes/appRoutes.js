const appRoutes = require('express').Router();
const Post = require('../schema/schema').Post;
const User = require('../schema/schema').User;
const passport = require('passport');
const handleRender = require('../handleRender.jsx').handleRender;

appRoutes.get('/*', handleRender);

module.exports = { appRoutes };
