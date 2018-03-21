import angular from 'angular';
import NewTodosComponent from './new-todos.component';

const newTodos = angular
  .module('mainPage.newTodos', [])
  .component('newTodos', NewTodosComponent)
  .name;

export default newTodos;
