angular.module('jobManagement')
  .controller('HomeController', ['$rootScope', '$scope', '$location', 'Auth', 'FlashService', HomeController]);

function HomeController($rootScope, $scope, $location, Auth, FlashService) {
  $scope.thing = 'It works!';
  $scope.auth = Auth.getAuth();
}
