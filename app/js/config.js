angular.module('jobManagement')
  .config(['$routeProvider', '$location',function($routeProvider, $location) {
    $routeProvider
      .when('/', {
        template: '<h1>{{ thing }}</h1>',
        controller: 'HomeController'
      });
  }]);
