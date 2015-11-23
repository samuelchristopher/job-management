angular.module('jobManagement')
  .controller('HomeController', ['$scope', '$location', 'Auth', 'FlashService', HomeController]);

function HomeController($scope, $location, Auth, FlashService) {
  $scope.thing = 'It works!';
}
