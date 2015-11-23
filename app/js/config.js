angular.module('jobManagement')
  .run(['$rootScope', '$location', 'FlashService', 'Auth', function($rootScope, $location, FlashService, Auth) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
        FlashService.toast('Please Log in to continue.', 'OK');
      }
    });
    $rootScope.auth = Auth.getAuth();
  }])
.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/login", {
    controller: "LoginController",
    templateUrl: "pages/login.html",
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.authRef.$waitForAuth();
      }]
    }
  }).when("/", {
    controller: "HomeController",
    templateUrl: "pages/home.html",
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.authRef.$requireAuth();
      }]
    }
  });
}]);
