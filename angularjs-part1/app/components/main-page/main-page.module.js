import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MainPageComponent from './main-page.component';
import TodoService from '../../service/todo.service';
import NewTodos from '../new-todos/new-todos.module';
import DoneTodos from '../done-todos/done-todos.module';

const MainPageModule = angular
    .module('mainPage', [
        uiRouter,
        NewTodos,
        DoneTodos
    ])
    .component('mainPage', MainPageComponent)
    .service('TodoService', TodoService)
    .name;

export default MainPageModule;
