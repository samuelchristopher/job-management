angular.module('jobManagement')
  .controller('RegisterController', ['$location', 'FiltersService','currentAuth', '$scope', 'Auth', 'FlashService', RegisterController]);

function RegisterController($location, FiltersService, currentAuth, $scope, Auth, FlashService) {
  FiltersService.guest(currentAuth);
  $scope.registerText = 'Sign Up';
  $scope.register = function() {
    Auth.createUser($scope.email, $scope.password);
    $scope.registerText = 'Processing...';
    setTimeout(function() {
      $scope.registerText = 'Sign Up';
    }, 500);
    // $location.path('/');
  };
}
