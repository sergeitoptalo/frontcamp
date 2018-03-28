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

routes.get('/api/edit/:id', function (req, res) {
    const todoId = req.params.id;
    Todo.findById(todoId,
        (err, todo) => {
            if (err) {
                res.send('An error has occurred');
            } else {
                res.send(todo);
            }
        })
});

routes.post('/api/add', (req, res) => {
    const todo = new Todo(req.body);
    todo.save(req.body, (err, result) => {
        if (err) {
            res.send('An error has occurred');
        } else {
            res.status(200).send('Todo was added');
        }
    });
});

routes.put('/api/update/:id', (req, res) => {
    const todoId = req.params.id;
    Todo.findByIdAndUpdate(todoId, req.body, function (err, docs) {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.json('Task was updated');
        }
    });
});

module.exports = routes;
