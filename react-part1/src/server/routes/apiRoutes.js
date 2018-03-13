const apiRoutes = require('express').Router();
const Post = require('../schema/schema').Post;
const User = require('../schema/schema').User;
const SessionUser = require('../schema/schema').SessionUser;
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

apiRoutes.get('/posts', function (req, res) {
    Post.find({}).
        populate('author').
        exec(function (err, posts) {
            res.send(posts);
        });
});

apiRoutes.get('/getPost/:id', function (req, res) {
    let postId = req.params.id;
    Post.findById(postId)
        .populate('author')
        .exec(function (err, post) {
            res.send(post);
        });
});

apiRoutes.post('/loginHandler', function (req, res, next) {
    passport.authenticate('local', function (err, user, message) {
        if (!user) {
            return res.json({ message: message.message });
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            const userData = {
                isAuthenticated: req.isAuthenticated(),
                userName: user.userName,
                userId: user.id
            }
            const sessionUser = new SessionUser(userData);
            sessionUser.save(req.body, (err, result) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    //res.json(true);
                }
            });
            return res.json(userData);
        });
    })(req, res, next)
});

apiRoutes.post('/register-user', function (req, res, next) {
    const user = new User(req.body);
    user.save(req.body, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.json(true);
        }
    });
});

apiRoutes.get('/get-used-login', function (req, res, next) {
    User.aggregate([
        {
            $group: {
                _id: {
                    login: "$login"
                }
            }
        },
        {
            $project: {
                _id: 0,
                login: "$_id.login"
            }
        }
    ], (err, users) => {
        res.json(users);
    })
});

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
    /* Post.findByIdAndRemove(postId, function (err, post) {
        if (err) {
            res.json({ 'error': 'An error has occurred' });
        } else {
            User.fin
            res.json(post);
        }
    }); */

    Post.findByIdAndRemove(postId)
        .populate('author')
        .exec(function (err, post) {
            let a = post.author.posts.indexOf(postId);
            post.author.posts.splice(a, 1);
            let query = `posts.${a}`;
            post.author.update({ posts: post.author.posts }, function (err, post) {
                if (err) {
                    res.json({ 'error': 'An error has occurred' });
                } else {
                    //let a = post;
                    res.json(post);
                }
            })
            // post.author.posts.update({}, {$unset : {query: 1 }}) 
            // post.author.posts.find(postId).remove();
            // res.send(author);
        });
});

apiRoutes.get('/logout', (req, res) => {
    console.log('before logout: ' + req.isAuthenticated())
    req.logout();
    console.log('after logout: ' + req.isAuthenticated())
    let isAuthenticated = req.isAuthenticated();
    SessionUser.remove({}, function (err, post) {
        if (err) {
            res.json({ 'error': 'An error has occurred' });
        } else {
            //res.json(post);
        }
    });
    res.end();
    //return res.redirect('/');
    //return res.json(isAuthenticated);
});

export default apiRoutes;
