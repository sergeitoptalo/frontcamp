import Controller from './controller.js';

if (!PRODUCTION) {
    console.log('DEVELOPMENT MODE');
}

if (PRODUCTION) {
    console.log('PRODUCTION MODE');
}

new Controller().renderApp();
