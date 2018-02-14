import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app.jsx';
import Form from './components/form.jsx';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

hydrate(app, document.getElementById('root'));
