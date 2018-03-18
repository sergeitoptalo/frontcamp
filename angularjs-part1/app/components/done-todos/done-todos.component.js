import { DoneTodosController } from './done-todos.controller';

angular.
    module('doneTodos').
    component('doneTodos', {
        templateUrl: 'app/components/done-todos/done-todos.template.html',
        controllerAs: 'DoneTodosCtrl',
        controller: ['$scope', 'todosFactory', ($scope, todosFactory) => DoneTodosController($scope, todosFactory)]
    });
