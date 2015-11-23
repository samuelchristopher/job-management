angular.module('jobManagement')
  .controller('LoginController', ['$rootScope', '$scope', 'Auth', '$location', 'FlashService', LoginController]);

function LoginController($rootScope, $scope, Auth, $location, FlashService) {
  $scope.loginText = 'Log In';

  $scope.login = function() {
    $scope.authData = Auth.login($scope.user.email, $scope.user.password);
    $scope.loginText = 'Processing...';
    setTimeout(function() {
      $scope.loginText = 'Log In';
    }, 500);
  };
}
