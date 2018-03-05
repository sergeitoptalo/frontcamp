import express from 'express';
import handleRender from './handleRender';
import apiRoutes from './routes/apiRoutes';

const Post = require('./schema/schema').Post;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//const session = require('cookie-session');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./schema/schema').User;

const port = 8000;
const server = express();

passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'password'
},
    function (username, password, done) {
        User.findOne({ login: username }, function (err, user, next) {
            if (err) {
                next(err);
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Login is incorrect' });
            }
            if (!user.verifyPassword(password, user.password)) {
                return done(null, false, { message: 'Passord is incorrect' });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    User.findOne({ login: user.login }, function (err, user) {
        if (err) { return done(err); }
        done(null, user);
    });
});


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser('secrettexthere'));
//app.use(session({ secret: 'SECRET' }))

server.use(session({
    secret: 'secrettexthere',
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({
        url: 'mongodb://toptalo:zavani74@cluster0-shard-00-00-s1vg1.mongodb.net:27017,cluster0-shard-00-01-s1vg1.mongodb.net:27017,cluster0-shard-00-02-s1vg1.mongodb.net:27017/database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
        collection: 'sessions'
    }),
    cookie: { httpOnly: true, maxAge: 2419200000 }
}));

server.use(passport.initialize());
server.use(passport.session());

server.use(express.static('public'));



server.get('/api/posts', function (req, res) {
    Post.find({}).
        populate('author').
        exec(function (err, posts) {
            res.send(posts);
        });
});

server.get('/api/getPost/:id', function (req, res) {
    let postId = req.params.id;
    Post.findById(postId)
        .populate('author')
        .exec(function (err, post) {
            res.send(post);
        });
});

server.post('/api/loginHandler', function (req, res, next) {
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
            return res.json(userData);
        });
    })(req, res, next)
});

server.post('/api/register-user', function (req, res, next) {
    const user = new User(req.body);
    user.save(req.body, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.json(true);
        }
    });
});

server.get('/api/get-used-login', function (req, res, next) {
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

server.use('/api/', apiRoutes);
server.get('/*', handleRender);

server.listen(port, () => {
    console.info(`Express listening on port ${port}`);
});
