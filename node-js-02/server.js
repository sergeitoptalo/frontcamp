const express = require('express');
const app = express();
const routes = require('./server/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
/* const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    author: String,
    date: Date,
    text: String
});

const Blog = mongoose.model('Blog', blogSchema); */



app.use(express.static(__dirname));

app.use('/', routes);

app.listen(8080, () => console.log('Running'));

