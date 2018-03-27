import angular from 'angular';
import EditTodoPageComponent from './edit-todo-page.component';
import TodoService from '../../service/todo.service';

const editTodoPage = angular
    .module('todo.edit-todo-page', [])
    .component('editTodoPage', EditTodoPageComponent)
    .service('TodoService', TodoService)
    .value('EventEmitter', payload => ({ $event: payload }))
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('edit', {
                url: '/edit/:id',
                component: 'editTodoPage',
                resolve: {
                     todoData: (TodoService, $stateParams) => TodoService.getTodo($stateParams.id)
                 } 
            })
        $urlRouterProvider.otherwise('/dashboard');
    })
    .name;

export default editTodoPage;
