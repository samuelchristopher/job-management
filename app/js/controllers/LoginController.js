angular.module('jobManagement')
  .controller('LoginController', ['currentAuth', '$rootScope', '$scope', 'Auth', '$location', 'FlashService', LoginController]);

function LoginController(currentAuth, $rootScope, $scope, Auth, $location, FlashService) {
  if(currentAuth) {
    $location.path('/');
  } else {
    $scope.loginText = 'Log In';

    $scope.login = function() {
      $scope.authData = Auth.login($scope.user.email, $scope.user.password);
      $scope.loginText = 'Processing...';
      setTimeout(function() {
        $scope.loginText = 'Log In';
      }, 500);
    };
  }
}
