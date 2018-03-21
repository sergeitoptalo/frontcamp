import angular from 'angular';
import MainPageModule from './main-page/main-page.module';
//import { DoneTodosModule } from './done-todos/done-todos.module';

const ComponentsModule = angular
    .module('app.components', [
        MainPageModule
    ])
    .name;

export default ComponentsModule;
