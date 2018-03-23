import angular from 'angular';
import NewTodosComponent from './new-todos.component';

const newTodos = angular
  .module('mainPage.newTodos', [])
  .component('newTodos', NewTodosComponent)
  /* .filter('filterByDays', function () {
    return function (todos, daysAgo) {
      let result = todos;
      if (daysAgo) {
        result = todos.filter(todo => daysAgo === new Date().getDate() - new Date(todo.date).getDate());
      }

      return result;
    }
  }) */
  .filter('filterNewTodos', function () {
    return function (todos) {

      let result = [];
      result = todos.filter(todo => !todo.isDone);
      return result;

    }
  })
  .filter('filterDaysAgo', function () {
    return function (todos, daysAgo) {

      let result = todos;
      if (daysAgo) {
        result = todos.filter(todo => daysAgo === new Date().getDate() - new Date(todo.creationDate).getDate());
      }
      return result;

    }
  })
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;

export default newTodos;
