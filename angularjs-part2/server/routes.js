const routes = require('express').Router();
const Article = require('./schema').Article;


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
        <link href="https://fonts.googleapis.com/css?family=Arsenal:400,400i,700,700i&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">
    </body>
    </html>`);
});


routes.get('/api/articles', (req, res) => {
    Article.find({}, (err, articles) => {
        res.send(articles);
    })
});

routes.get('/api/edit/:id', function (req, res) {
    const articleId = req.params.id;
    Article.findById(articleId,
        (err, article) => {
            if (err) {
                res.send('An error has occurred');
            } else {
                res.send(article);
            }
        })
});

routes.post('/api/add', (req, res) => {
    const article = new Article(req.body);
    article.save(req.body, (err, result) => {
        if (err) {
            res.send('An error has occurred');
        } else {
            res.status(200).send('Article was added');
        }
    });
});

routes.put('/api/update/:id', (req, res) => {
    const articleId = req.params.id;
    Article.findByIdAndUpdate(articleId, req.body, function (err, docs) {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.json('Task was updated');
        }
    });
});

module.exports = routes;
