import angular from 'angular';
import AddTaskButtonComponent from './add-task-button.component';

const addTaskButton = angular
  .module('todo.addTaskButton', [])
  .component('addTaskButton', AddTaskButtonComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        component: 'addTaskButton',
        /*  resolve: {
             todoData: TodoService => TodoService.getTodos()
         } */
      })
    $urlRouterProvider.otherwise('/dashboard');
  })
  .name;

export default addTaskButton;
