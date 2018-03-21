import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppComponent from './app.component';
import Components from './components/components.module';

const app = angular
    .module('app', [
        Components,
        uiRouter
    ])
    .component('app', AppComponent)
    .name;

export default app;
