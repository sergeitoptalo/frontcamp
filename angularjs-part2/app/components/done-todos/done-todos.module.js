import angular from 'angular';
import DoneTodosComponent from './done-todos.component';

const doneTodos = angular
    .module('mainPage.doneTodos', [])
    .component('doneTodos', DoneTodosComponent)
    .filter('filterDoneTodos', function () {
        return function (todos) {
            let result = [];
            result = todos.filter(todo => todo.isDone);
            return result;
        }
    })
    .filter('filterDaysAgoDone', function () {
        return function (todos, daysAgo) {
            let result = todos;

            if (daysAgo || daysAgo === 0) {
                result = todos.filter(todo => Number(daysAgo) === new Date().getDate() - new Date(todo.doneDate).getDate());
            }

            return result;
        }
    })
    .name;

export default doneTodos;
