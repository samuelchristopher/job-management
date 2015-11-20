angular.module('jobManagement')
  .controller('MainController', ['$mdSidenav', '$scope', MainController]);

function MainController($mdSidenav, $scope) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}
