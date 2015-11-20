angular.module('jobManagement')
  .controller('HomeController', ['$scope', HomeController]);

function HomeController($scope) {
  $scope.thing = 'Thank you JESUS!';
}
