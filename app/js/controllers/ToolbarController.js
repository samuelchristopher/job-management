angular.module('jobManagement')
  .controller('ToolbarController', ['$mdSidenav', '$rootScope', '$scope', 'Auth', '$location', ToolbarController]);

function ToolbarController($mdSidenav, $rootScope, $scope, Auth, $location) {
  $rootScope.auth = Auth.getAuth();
  $scope.logout = function () {
    Auth.logout();
  };
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.updateProfile = function() {
    $location.path('/profile');
  }
}
