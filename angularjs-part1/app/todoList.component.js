import angular from 'angular';

angular.
  module('todoApp').
  component('todoList', {
    template:
        '<ul>' +
          '<li ng-repeat="todo in $ctrl.todos">' +
            '<span>{{todo.name}}</span>' +
            '<p>{{todo.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.todos = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });
