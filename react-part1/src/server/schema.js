const mongoose = require('mongoose');

mongoose.connect('mongodb://toptalo:zavani74@cluster0-shard-00-00-s1vg1.mongodb.net:27017,cluster0-shard-00-01-s1vg1.mongodb.net:27017,cluster0-shard-00-02-s1vg1.mongodb.net:27017/database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

let Schema = mongoose.Schema;

const postSchema = new Schema({
    author: String,
    date: Date,
    postText: String
});

const userSchema = new Schema({
    userName: String,
    login: String,
    password: String,
    posts: Array
});


userSchema.methods.verifyPassword = function verifyPassword(password, userPassword) {
    return password === userPassword;
};

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema);


module.exports = { Post, User };
