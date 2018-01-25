const express = require('express');
const app = express();
let articles = require('./articles/blogs.json');

//app.get('*', (req, res) => { let art = Object.keys(articles); res.send(res.params)});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/blogs', (req, res) => res.send(articles));
app.get('/blogs/:id', (req, res) => {
    res.send(articles[req.params.id]);
});
app.post('/blogs', (req, res) => res.send('Post'))

app.listen(8080, () => console.log('Running'));
