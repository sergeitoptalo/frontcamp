import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/app.jsx';

function renderFullPage(html) {
    return `
    <!DOCTYPE html>
    <html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React demo</title>
    
</head>

<body>
    <div id="root">${html}</div>
</body>
</html>
    `
}

function handleRender(req, res) {
    const html = renderToString(<App name="React  2 sefsege dgf" />);
    res.send(renderFullPage(html));
}

module.exports = handleRender;
