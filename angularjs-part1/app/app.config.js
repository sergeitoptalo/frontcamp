angular.
  module('todoApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/dashboard', {
          templateUrl: 'app/pages/mainPage.template.html'
        }).
        when('/add', {
          templateUrl: 'app/pages/addTask.template.html'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/dashboard', {
          templateUrl: 'app/pages/mainPage.template.html'
        });
    }
  ]);
