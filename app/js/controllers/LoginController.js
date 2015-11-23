angular.module('jobManagement')
  .controller('LoginController', ['$scope', LoginController]);

function LoginController($scope) {
  $scope.login = function() {
    console.log("Logging in...");
  };
}
