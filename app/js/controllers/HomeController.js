angular.module('jobManagement')
  .controller('HomeController', ['currentAuth', '$rootScope', '$scope', '$location', 'Auth', 'FlashService', HomeController]);

function HomeController(currentAuth, $rootScope, $scope, $location, Auth, FlashService) {
  $scope.user = currentAuth.password;
  $scope.thing = 'It works!';
  $scope.auth = Auth.getAuth();
}
