angular.module('jobManagement')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'LoginController'
      })
      .otherwise({ redirectTo: '/login' });
  }]);
