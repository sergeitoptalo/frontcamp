import angular from 'angular';
import NewTodosComponent from './new-todos.component';

const newTodos = angular
    .module('mainPage.newTodos', [])
    .component('newTodos', NewTodosComponent)
    .filter('filterNewTodos', function () {
        return function (todos) {
            let result = [];
            result = todos.filter(todo => !todo.isDone);
            return result;
        }
    })
    .filter('filterDaysAgoNew', function () {
        return function (todos, daysAgo) {
            let result = todos;

            if (daysAgo || daysAgo === 0) {
                result = todos.filter(todo => Number(daysAgo) === new Date().getDate() - new Date(todo.creationDate).getDate());
            }

            return result;
        }
    })
    .value('EventEmitter', payload => ({ $event: payload }))
    .name;

export default newTodos;
