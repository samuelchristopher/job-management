angular.module('jobManagement')
  .controller('LoginController', ['$scope', LoginController]);

function LoginController($scope) {
  $scope.greeting = "Hello Login";
}
