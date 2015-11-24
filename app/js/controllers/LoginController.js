angular.module('jobManagement')
  .controller('LoginController', ['FiltersService', 'currentAuth', '$rootScope', '$scope', 'Auth', '$location', 'FlashService', LoginController]);

function LoginController(FiltersService, currentAuth, $rootScope, $scope, Auth, $location, FlashService) {
  $scope.register = '/register';
  $scope.gotoRegister = function() {
    $location.path('/register');
  };

  FiltersService.guest(currentAuth);

  $scope.loginText = 'Log In';

  $scope.login = function() {
    $scope.authData = Auth.login($scope.user.email, $scope.user.password);
    $scope.loginText = 'Processing...';
    setTimeout(function() {
      $scope.loginText = 'Log In';
    }, 500);
  };

}
