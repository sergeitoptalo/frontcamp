import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import congigureStore from './store';

import App from './app';

const store = congigureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App name="World" />
    </BrowserRouter>
  </Provider>
);

hydrate(app, document.getElementById('root'));
