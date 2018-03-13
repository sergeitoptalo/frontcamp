import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';

import routes from '../client/routes';
import configureStore from '../client/store';
import App from '../client/app';

import { renderFullPage } from './templates/pageTemplate';
import { updateUser } from '../client/actions/user';
//import { loadApp } from '../client/actions/app';

const SessionUser = require('./schema/schema').SessionUser;

function handleRender(req, res) {
    const store = configureStore();

    if (!req.isAuthenticated()) {
        store.dispatch(updateUser({
            isAuthenticated: false,
            userId: null,
            userName: null
        }));
        serverRender(store);
    }

    if (req.isAuthenticated()) {
        SessionUser.findOne({}, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                store.dispatch(updateUser({
                    isAuthenticated: req.isAuthenticated(),
                    userId: result.userId,
                    userName: result.userName
                }));
                serverRender(store);
            }
        });
    }

    function serverRender(updatedStore) {
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
                    <Provider store={updatedStore}>
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
}

export default handleRender;
