angular.module('jobManagement')
  .run(['$rootScope', 'Auth', function($rootScope, Auth) {
    $rootScope.auth = Auth.getAuth();
  }])
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
