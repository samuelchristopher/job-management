angular.module('jobManagement')
  .controller('HomeController', ['$scope', 'FlashService', HomeController]);

function HomeController($scope, FlashService) {
  $scope.thing = 'It works!';
}
