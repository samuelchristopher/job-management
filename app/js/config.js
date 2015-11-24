angular.module('jobManagement')
  .run(['$rootScope', '$location', 'FlashService', 'Auth', function($rootScope, $location, FlashService, Auth) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === 'AUTH_REQUIRED') {
        $location.path('/login');
        FlashService.toast('Please Log in to continue.', 'OK');
      }
    });
    $rootScope.auth = Auth.getAuth();
  }])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'pages/login.html',
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.authRef.$waitForAuth();
        }]
      }
    })
    .when('/register', {
      controller: 'RegisterController',
      templateUrl: 'pages/register.html',
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.authRef.$waitForAuth();
        }]
      }
    })
    .when('/', {
    controller: 'HomeController',
    templateUrl: 'pages/home.html',
    resolve: {
      'currentAuth': ['Auth', function(Auth) {
        return Auth.authRef.$requireAuth();
      }]
    }
  })
  .when('/profile', {
    controller: 'ProfileController',
    templateUrl: 'pages/profile.html',
    resolve: {
      'currentAuth': ['Auth', function(Auth) {
        return Auth.authRef.$requireAuth();
      }]
    }
  })
  .when('/sales', {
    controller: 'SalesController',
    templateUrl: 'pages/sales.html',
    resolve: {
      'currentAuth': ['Auth', function(Auth) {
        return Auth.authRef.$requireAuth();
      }]
    }
  });
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });
}]);
