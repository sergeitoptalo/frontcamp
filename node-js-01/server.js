const express = require('express');
const app = express();
const routes = require('./server/routes');

app.use('/', routes);

app.set('view engine', 'pug');

app.listen(8080, () => console.log('Running'));

