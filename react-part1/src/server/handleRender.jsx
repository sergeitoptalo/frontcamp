import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { renderFullPage } from './views/pageTemplate';

import App from '../client/app.jsx';

function handleRender(req, res) {
    const context = {};

    const app = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const html = renderToString(app);

    if (context.url) {
        return res.redirect(context.url);
    }

    return res.send(renderFullPage(html));
}

module.exports = handleRender;
