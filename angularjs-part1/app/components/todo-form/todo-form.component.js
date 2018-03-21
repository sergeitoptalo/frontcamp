import { TodoFormController } from './todo-form.controller';

angular.
    module('todoForm').
    component('todoForm', {
        templateUrl: 'app/components/todo-form/todo-form.template.html',
        controllerAs: 'TodoFormCtrl',
        controller: ['$routeParams', '$scope', 'todosFactory', ($routeParams, $scope, todosFactory) => TodoFormController($routeParams, $scope, todosFactory)
        ]
    });
