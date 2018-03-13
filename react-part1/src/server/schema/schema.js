const mongoose = require('mongoose');
import { appConfig } from '../../config/appConfig';

mongoose.connect(appConfig.mongoConnection);

let Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: Date,
    postText: String
});

const userSchema = new Schema({
    userName: String,
    login: String,
    password: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

const sessionUserSchema = new Schema({
    userName: String,
    userId: String
});

userSchema.methods.verifyPassword = function verifyPassword(password, userPassword) {
    return password === userPassword;
};

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema);
const SessionUser = mongoose.model('SessionUser', sessionUserSchema);


module.exports = { Post, User, SessionUser };
