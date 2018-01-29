const express = require('express');
const app = express();
const routes = require('./server/routes');
let articles = require('./server/blogs.json');

//app.use(express.static(__dirname));
app.use('/', routes);

app.set('view engine', 'pug');

app.get('/bb', function (req, res) {
    res.render('pageNotFound', { title: 'Hey', message: 'Page not found' })
})

app.listen(8080, () => console.log('Running'));

