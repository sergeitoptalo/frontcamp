const express = require('express');
const app = express();
const routes = require('./server/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static('public'));
//app.use(express.static('/public'));
app.use('/', routes);

app.listen(8000, () => console.log('Running'));
