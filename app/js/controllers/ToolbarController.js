angular.module('jobManagement')
  .controller('ToolbarController', ['$scope', 'Auth', '$location', ToolbarController]);

function ToolbarController($scope, Auth, $location) {
  $scope.logout = function () {
    Auth.logout();
  };
}
