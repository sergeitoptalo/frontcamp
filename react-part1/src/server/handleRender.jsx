import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';

import routes from '../client/routes';
import configureStore from '../client/store';
import App from '../client/app';

function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/bundle.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
        </body>
      </html>
  `;
}

function handleRender(req, res) {
    const store = configureStore();
console.log('app: ' + req.isAuthenticated());
    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route, match }) => {
        const { getData } = route.component;

        if (!(getData instanceof Function)) {
            return Promise.resolve(null);
        }

        return getData(store.dispatch, match);
    });

    return Promise.all(promises)
        .then(() => {
            const context = {};
            const isAuthenticated = req.isAuthenticated()
            const app = (
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context} >
                        <App />
                    </StaticRouter>
                </Provider>
            );

            const html = renderToString(app);

            if (context.url) {
                return res.redirect(context.url);
            }

            const preloadedState = store.getState();
            preloadedState.userState.isAuthenticated = req.isAuthenticated();
            return res.send(renderFullPage(html, preloadedState));
        });
}

export default handleRender;
