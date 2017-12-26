import Controller from './controller.js';
import '../styles/app-off.scss';

if (!PRODUCTION) {
    console.log('DEVELOPMENT MODE');
}

if (PRODUCTION) {
    console.log('PRODUCTION MODE');
}

new Controller().renderApp();
