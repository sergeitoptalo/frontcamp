import angular from 'angular';
import TodoFormComponent from './todo-form.component';
import TodoService from '../../service/todo.service';
import { TodoMinLength } from './todo-min-length.directive';

const todoForm = angular
  .module('todo.form', [])
  .component('todoForm', TodoFormComponent)
  .directive('todoMinLength', () => new TodoMinLength())
  .service('TodoService', TodoService)
  .value('EventEmitter', payload => ({ $event: payload }))
  //.config(($stateProvider, $urlRouterProvider) => {
   // $stateProvider
   //   .state('add', {
    //    url: '/add',
    //    component: 'todoForm',
        /*  resolve: {
             todoData: TodoService => TodoService.getTodos()
         } */
    //  })
   // $urlRouterProvider.otherwise('/dashboard');
  //})
  .name;

export default todoForm;
