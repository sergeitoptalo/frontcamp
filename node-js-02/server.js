const express = require('express');
const path = require('path');
const app = express();
const routes = require('./server/routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./server/schema').User;

passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'password'
},
    function (username, password, done) {
        User.findOne({ login: username }, function (err, user, next) {
            if (err) {
                next(err);
                console.log(err);
                return done(err);
            }
            if (!user) {
                console.log(user);
                next(err);
                return done(null, false);
            }
            if (!user.verifyPassword(password, user.password)) {
                console.log(user);
                next(err);
                return done(null, false);
            }
            console.log(user);
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

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'SECRET' }))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname));
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "./views"));

app.use('/', routes);

app.use(function (err, req, res, next) {
    console.error(err)
    res.status(500).send(err.message)
})

app.listen(8080, () => console.log('Running'));

