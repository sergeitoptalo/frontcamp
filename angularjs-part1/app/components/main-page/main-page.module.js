import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MainPageComponent from './main-page.component';
import TodoService from './todo.service';
import TodoForm from '../todo-form/todo-form.module';
import NewTodos  from '../new-todos/new-todos.module';

const MainPageModule = angular
  .module('mainPage', [
    uiRouter,
    TodoForm,
    NewTodos
  ])
  .component('mainPage', MainPageComponent)
  .service('TodoService', TodoService)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        component: 'mainPage',
        resolve: {
          todoData: TodoService => TodoService.getTodos()
        }
      })
    $urlRouterProvider.otherwise('/dashboard');
  })
  .name;

export default MainPageModule;
