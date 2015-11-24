angular.module('jobManagement')
  .controller('NavigationController', ['$location', '$mdSidenav', '$scope', MainController]);

function MainController($location, $mdSidenav, $scope) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.gotoSales = function() {
    $location.path('/sales');
  };
}
