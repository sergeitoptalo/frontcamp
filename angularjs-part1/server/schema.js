const mongoose = require('mongoose');

mongoose.connect('mongodb://toptalo:zavani74@cluster0-shard-00-00-s1vg1.mongodb.net:27017,cluster0-shard-00-01-s1vg1.mongodb.net:27017,cluster0-shard-00-02-s1vg1.mongodb.net:27017/database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

let Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: String,
    creationDate: Date,
    isDone: Boolean,
    doneDate: Date,
    updateDate: Date
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo };
