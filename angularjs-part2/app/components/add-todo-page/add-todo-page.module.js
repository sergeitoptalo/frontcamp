import angular from 'angular';
import AddTodoPageComponent from './add-todo-page.component';
import TodoService from '../../service/todo.service';

const addTodoPage = angular
    .module('todo.add-todo-page', [])
    .component('addTodoPage', AddTodoPageComponent)
    .service('TodoService', TodoService)
    .value('EventEmitter', payload => ({ $event: payload }))
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('add', {
                url: '/add',
                component: 'addTodoPage',
            })
        $urlRouterProvider.otherwise('/dashboard');
    })
    .name;

export default addTodoPage;
