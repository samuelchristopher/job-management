angular.module('jobManagement')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
      })
      .otherwise({ redirectTo: '/' });
  }]);
