const routes = require('express').Router();
const Todo = require('./schema').Todo;


routes.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        
    </head>
    
    
    <body ng-app="app">
    <script src="public/js/app.bundle.js"></script>
        <link rel="stylesheet" href="public/css/styles.css" />
        <app></app>
        <!-- <div class="page-wrapper">
            <div class="app-container">
                <div class="column">
                    <new-todos></new-todos>
                </div>
                <div class="column">
                    <done-todos></done-todos>
                </div>
            </div>
    
            <div class="output">
                <div ng-view></div>
            </div>
        </div> -->
        
        <link href="https://fonts.googleapis.com/css?family=Arsenal:400,400i,700,700i&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">
    </body>
    
    </html>`);
});


routes.get('/api/todos', (req, res) => {
    Todo.find({}, (err, todos) => {
        res.send(todos);
    })
});

module.exports = routes;
