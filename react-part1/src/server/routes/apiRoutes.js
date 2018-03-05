const apiRoutes = require('express').Router();
const Post = require('../schema/schema').Post;
const User = require('../schema/schema').User;
const passport = require('passport');


/* apiRoutes.get('/posts', function (req, res) {
    Post.find({}).
        populate('author').
        exec(function (err, posts) {
            res.send(posts);
        });
});

apiRoutes.get('/post/:id', function (req, res) {
    let postId = req.params.id;
    Post.findById(postId)
        .populate('author')
        .exec(function (err, post) {
            res.send(post);
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
            if (err) {
                return err.message;
            };
            user.posts.push(post);
            user.save();
            res.json('Post was added');
        });

    });
});

apiRoutes.delete('/delete-post/:id', (req, res) => {
    let postId = req.params.id;
    Post.findByIdAndRemove(postId, function (err, post) {
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


// REGISTRATION

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


// LOGIN

apiRoutes.post('/loginHandler', function (req, res, next) {
    passport.authenticate('local', function (err, user, message) {
        req.logIn(user, function (err) {
        });

        let isAuthenticated = req.isAuthenticated();
        return res.json({ user: user, message: message, isAuthenticated: isAuthenticated });
    })(req, res, next)
});

apiRoutes.get('/logout', (req, res) => {
    req.logout();
    let isAuthenticated = req.isAuthenticated();
    return res.json({ isAuthenticated: isAuthenticated });
}); */

apiRoutes.get('/author/:id', (req, res) => {
    let authorId = req.params.id;
    User.findById(authorId)
        .populate('posts')
        .exec(function (err, author) {
            res.send(author);
        });
});

apiRoutes.post('/create-post', (req, res) => {
    req.body.date = new Date();

    const user = User.findById(req.body.authorId, (err, user) => {
        const post = new Post({
            postText: req.body.postText,
            date: req.body.date,
            author: user._id
        });

        post.save(function (err) {
            if (err) {
                return err.message;
            };
            user.posts.push(post);
            user.save();
            res.json('Post was added');
        });

    });
});

apiRoutes.delete('/delete/:id', (req, res) => {
    let postId = req.params.id;
    Post.findByIdAndRemove(postId, function (err, post) {
        if (err) {
            res.json({ 'error': 'An error has occurred' });
        } else {
            res.json(post);
        }
    });
});

apiRoutes.get('/logout', (req, res) => {
    req.logout();
    let isAuthenticated = req.isAuthenticated();
    return res.json(false);
});

export default apiRoutes;
