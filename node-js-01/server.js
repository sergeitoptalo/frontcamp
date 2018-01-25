const express = require('express');
const app = express();
let articles = require('./articles/blogs.json');

app.get('*', (req, res) => res.send(articles));

app.listen(8080, () => console.log('Running'));
