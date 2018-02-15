import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../client/app.jsx';

function renderFullPage(html, isAuthenticated) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>React part 1</title>
                <script>window.__IS_AUTHENTICATED__ = ${isAuthenticated}</script>
            </head>
            <body>
                <div id="root">${html} </div>
                <script src="./js/bundle.js"></script>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            </body>
        </html>
    `
}

function handleRender(req, res, data) {
    const context = {};
    let isAuthenticated = req.isAuthenticated();
    const app = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    const html = renderToString(app);
    if (context.url) {
        return res.redirect(context.url);
    }
    res.send(renderFullPage(html, isAuthenticated));
}


module.exports = handleRender;
